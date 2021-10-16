import React, { useState } from "react";
import styles from "./NewSearchForm.module.scss"
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Button } from "../button/Button";
import axios from "axios";

function NewSearchFormHiring() {
    const { handleSubmit, formState: { errors }, register } = useForm();
    const [newSearchSuccess, toggleNewSearchSuccess] = useState();
    const history = useHistory();
    const jwtToken = localStorage.getItem('token');
    const userId = localStorage.getItem('id');

    async function onSubmit(data) {
        try {
            const result = await axios.post(`http://localhost:8080/api/searches/id/${userId}`, {
                functionTitle: data.functionTitle,
                amount: data.amount,
                fullName: data.fullName,
                location: data.location,
                headline: data.headline,
                email: data.email,
                searchId: data.searchId,
            }, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${jwtToken}`,
                }
            })
            toggleNewSearchSuccess(true);
            history.push("/new-search-hiring-success");
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
                            I want to hire someone as:
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
                            I want to spend around (€ p/h):
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

                    <div>
                        <label
                            htmlFor="fullName">
                            Full name
                        </label>
                        <input
                            className={styles["new-search__input"]}
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
                            className={styles["new-search__input"]}
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
                                  className={styles["new-search__input"]}
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
                        btnText={"Continue"}
                    />

                    {newSearchSuccess && <p>Search is created!</p>}
                </form>
            </div>
        </div>
    );
}

export default NewSearchFormHiring;
