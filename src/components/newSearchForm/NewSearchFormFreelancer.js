import React, {useState} from "react";
import styles from "./NewSearchForm.module.scss"
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Button } from "../button/Button";
import axios from "axios";

function NewSearchFormFreelancer() {
    const { handleSubmit, formState: { errors }, register } = useForm();
    const [newSearchSuccess, toggleNewSearchSuccess] = useState();
    const history = useHistory();
    const jwtToken = localStorage.getItem('token');
    const userId = localStorage.getItem('id');

    async function onSubmit(data) {
        console.log(data);
        try {
            const result = await axios.post(`http://localhost:8080/api/searches/id/${userId}`, {
                functionTitle: data.functionTitle,
                amount: data.amount,
            }, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${jwtToken}`,
                }
            })
            console.log(result);
            toggleNewSearchSuccess(true);
            history.push("/new-search-freelancer-success");
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <div className={styles["new-search"]}>
            <div className={styles["new-search__container"]}>
                <form onSubmit={handleSubmit(onSubmit)} className={styles["new-search__form"]}>

                    <div>
                        <label
                            htmlFor="functionTitle">
                            I want to get hired as:
                        </label>
                        <input
                            className={styles["new-search__input"]}
                            type="text"
                            {...register("functionTitle", {
                                required: {
                                    value: true,
                                    message: "Please enter a function title",
                                },
                            })}
                        />
                        {errors.functionTitle && <p>{errors.functionTitle.message}</p>}
                    </div>

                    <div>
                        <label
                            htmlFor="amount">
                            I want to earn around (in € per hour):
                        </label>
                        <input
                            className={styles["new-search__input"]}
                            type="number"
                            {...register("amount", {
                                required: {
                                    value: true,
                                    message: "Please enter an amount",
                                },
                            })}
                        />
                        {errors.amount && <p>{errors.amount.message}</p>}
                    </div>

                    <Button
                        type="submit"
                        btnText={"Continue"}
                    />

                    {newSearchSuccess && <p>Search is created!</p>}
                </form>
            </div>
        </div>
    );
}

export default NewSearchFormFreelancer;
