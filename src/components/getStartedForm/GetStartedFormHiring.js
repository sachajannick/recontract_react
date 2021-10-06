import React, {useRef, useState} from "react";
import styles from "./GetStartedForm.module.scss";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Button } from "../button/Button";
import axios from "axios";

function GetStartedFormHiring() {
    const { handleSubmit, formState: { errors }, register, watch } = useForm();
    const password = useRef({});
    password.current = watch("password");
    const [ registerSuccess, toggleRegisterSuccess ] = useState(false);
    const history = useHistory();

    async function onSubmit(data) {
        console.log(data);
        try {
            const result = await axios.post('http://localhost:8080/api/auth/signup', {
                username: data.username,
                password: data.password,
                fullName: data.fullName,
                email: data.email,
                location: data.location,
                headline: data.headline,
                hiringOrFreelancer: "hiring",
                role: ["user"]
            })
            console.log(result);
            toggleRegisterSuccess(true);
            history.push('/login-hiring');
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div className={styles["get-started"]}>
            <div className={styles["get-started__container"]}>
                <form onSubmit={handleSubmit(onSubmit)} className={styles["get-started__form"]}>

                    <div>
                        <label
                            htmlFor="fullName">
                            Full name
                        </label>
                        <input
                            className={styles["get-started__input"]}
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
                            htmlFor="username">
                            Username
                        </label>
                        <input
                            className={styles["get-started__input"]}
                            type="text"
                            {...register("username", {
                                required: {
                                    value: true,
                                    message: "Please enter your username",
                                },
                            })}
                        />
                        {errors.username && <p>{errors.username.message}</p>}
                    </div>

                    <div>
                        <label
                            htmlFor="email">
                            Email
                        </label>
                        <input
                            className={styles["get-started__input"]}
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

                    <div>
                        <label
                            htmlFor="location">
                            Location
                        </label>
                        <input
                            className={styles["get-started__input"]}
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
                                  className={styles["get-started__input"]}
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
                            htmlFor="password">
                            Password (min. 8 characters)
                        </label>
                        <input
                            className={styles["get-started__input"]}
                            type="password"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "Please enter your password",
                                },
                                minLength: {
                                    value: 8,
                                    message: "Password must be at least 8 characters"
                                },
                            })}
                        />
                        {errors.password && <p>{errors.password.message}</p>}
                    </div>

                    <div>
                        <label
                            htmlFor="password2">
                            Confirm password
                        </label>
                        <input
                            className={styles["get-started__input"]}
                            type="password"
                            {...register("password2", {
                                required: {
                                    value: true,
                                    message: "Please re-enter your password",
                                },
                                minLength: {
                                    value: 8,
                                    message: "Password must be at least 8 characters",
                                },
                                validate: value => value === password.current || "Your entered passwords don't match"
                            })}
                        />
                        {errors.password2 && <p>{errors.password2.message}</p>}
                    </div>

                    <Button
                        type="submit"
                        btnText={"Continue"}
                    />
                    {registerSuccess && <p>Registration successful!</p>}
                </form>
            </div>
        </div>
    );
}

export default GetStartedFormHiring;
