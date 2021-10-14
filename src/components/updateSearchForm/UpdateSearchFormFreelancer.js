import React, { useState } from "react";
import styles from "./UpdateSearchForm.module.scss"
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Button } from "../button/Button";
import axios from "axios";

function UpdateSearchFormFreelancer() {

    const [searchId, setSearchId] = useState();

    const { handleSubmit, formState: { errors }, register } = useForm();
    const [updateSearchSuccess, toggleUpdateSearchSuccess] = useState();
    const history = useHistory();
    const jwtToken = localStorage.getItem('token');
    const userId = localStorage.getItem('id');

    async function fetchSearches() {
        try {
            const searches = await axios.get(`http://localhost:8080/api/searches/long/id/${userId}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${jwtToken}`,
                }
            })
            console.log(searches.data);
            setSearchId(searches.data);
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
                newLocation: data.newLocation,
                newHeadline: data.newHeadline,
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

                    <div>
                        <label
                            htmlFor="newLocation">
                            Location
                        </label>
                        <input
                            className={styles["update-search__input"]}
                            type="text"
                            {...register("newLocation", {
                                required: {
                                    value: true,
                                    message: "Please enter your location",
                                },
                            })}
                        />
                        {errors.newLocation && <p>{errors.newLocation.message}</p>}
                    </div>

                    <div>
                        <label
                            htmlFor="newHeadline">
                            Headline (min. 40 characters)
                        </label>
                        <textarea rows="1" cols="16"
                                  className={styles["update-search__input"]}
                                  {...register("newHeadline", {
                                      required: {
                                          value: true,
                                          message: "Please enter a headline",
                                      },
                                      minLength: {
                                          value: 40,
                                          message: "Headline must be at least 40 characters"
                                      },
                                      maxLength: {
                                          value: 70,
                                          message: "Headline can be max 70 characters"
                                      }
                                  })}
                        />
                        {errors.newHeadline && <p>{errors.newHeadline.message}</p>}
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
