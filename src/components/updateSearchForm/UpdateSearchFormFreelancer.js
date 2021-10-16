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
                functionTitle: data.functionTitle,
                amount: data.amount,
                fullName: data.fullName,
                location: data.location,
                headline: data.headline,
                email: data.email,
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
                            htmlFor="functionTitle">
                            I want to get hired as:
                        </label>
                        <input
                            className={styles["update-search__input"]}
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
                            className={styles["update-search__input"]}
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

                    <div>
                        <label
                            htmlFor="fullName">
                            Full name
                        </label>
                        <input
                            className={styles["update-search__input"]}
                            type="text"
                            {...register("fullName", {
                                required: {
                                    value: true,
                                    message: "Please enter your full name",
                                },
                            })}
                        />
                        {errors.fullName && <p>{errors.fullName.message}</p>}
                    </div>

                    <div>
                        <label
                            htmlFor="location">
                            Location
                        </label>
                        <input
                            className={styles["update-search__input"]}
                            type="text"
                            {...register("location", {
                                required: {
                                    value: true,
                                    message: "Please enter your location",
                                },
                            })}
                        />
                        {errors.location && <p>{errors.location.message}</p>}
                    </div>

                    <div>
                        <label
                            htmlFor="headline">
                            Headline (min. 40 characters)
                        </label>
                        <textarea rows="1" cols="16"
                                  className={styles["update-search__input"]}
                                  {...register("headline", {
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
                        {errors.headline && <p>{errors.headline.message}</p>}
                    </div>

                    <div>
                        <label
                            htmlFor="email">
                            Email
                        </label>
                        <input
                            className={styles["new-search__input"]}
                            type="email"
                            {...register("email", {
                                required: {
                                    value: true,
                                    pattern: !/\S+@\S+\.\S+/,
                                    message: "Please enter your email",
                                },
                            })}
                        />
                        {errors.email && <p>{errors.email.message}</p>}
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
