import React, {useState} from "react";
import styles from "./UpdateSearchForm.module.scss"
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Button } from "../button/Button";
import axios from "axios";
import GetAllSearches from "../../helpers/GetAllSearches";

function UpdateSearchFormFreelancer() {
    const { handleSubmit, formState: { errors }, register } = useForm();
    const [updateSearchSuccess, toggleUpdateSearchSuccess] = useState();
    const history = useHistory();
    const jwtToken = localStorage.getItem('token');
    const searchId = localStorage.getItem('searchId');
    const userId = localStorage.getItem('userId');

    async function fetchSearches() {
        try {
            const searches = await axios.get(`http://localhost:8080/api/searches/id/all`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${jwtToken}`,
                }
            })
            console.log(searches.data);
            const result = GetAllSearches(searches.data);
            console.log(result)
        } catch (e) {
            console.error(e);
        }
    }

    fetchSearches()

    async function onSubmit(data) {
        console.log(data);
        try {
            const result = await axios.patch(`http://localhost:8080/api/searches/id/${searchId}`, {
                newFunctionTitle: data.newFunctionTitle,
                newAmount: data.newAmount,
            }, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${jwtToken}`,
                }
            })
            console.log(result);
            toggleUpdateSearchSuccess(true);
            history.push("/update-search-freelancer-success");
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div className={styles["update-search"]}>
            <div className={styles["update-search__container"]}>
                <form onSubmit={handleSubmit(onSubmit)} className={styles["update-search__form"]}>

                    <div>
                        <label
                            htmlFor="newFunctionTitle">
                            I want to get hired as:
                        </label>
                        <input
                            className={styles["update-search__input"]}
                            type="text"
                            {...register("newFunctionTitle", {
                                required: {
                                    value: true,
                                    message: "Please enter a function title",
                                },
                            })}
                        />
                        {errors.newFunctionTitle && <p>{errors.newFunctionTitle.message}</p>}
                    </div>

                    <div>
                        <label
                            htmlFor="newAmount">
                            I want to earn around (in € per hour):
                        </label>
                        <input
                            className={styles["update-search__input"]}
                            type="number"
                            {...register("newAmount", {
                                required: {
                                    value: true,
                                    message: "Please enter an amount",
                                },
                            })}
                        />
                        {errors.newAmount && <p>{errors.newAmount.message}</p>}
                    </div>

                    <Button
                        type="submit"
                        btnText={"Continue"}
                    />

                    {updateSearchSuccess && <p>Search is updated!</p>}
                </form>
            </div>
        </div>
    );
}

export default UpdateSearchFormFreelancer;