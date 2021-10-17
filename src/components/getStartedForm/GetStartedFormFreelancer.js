import React, { useRef, useState } from "react";
import styles from "./GetStartedForm.module.scss";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Button } from "../button/Button";
import axios from "axios";

function GetStartedFormFreelancer() {
    const { handleSubmit, formState: { errors }, register, watch } = useForm();
    const password = useRef({});
    password.current = watch("password");
    const [ registerFailure, toggleRegisterFailure] = useState(false);
    const history = useHistory();

    async function onSubmit(data) {
        console.log(data);
        try {
            const result = await axios.post('http://localhost:8080/api/auth/signup', {
                username: data.username,
                password: data.password,
                hiringOrFreelancer: "freelancer",
                role: ["user"]
            })
            history.push('/login-freelancer');
        } catch (e) {
            console.error(e);
            toggleRegisterFailure(true);
        }
    }

    return (
        <div className={styles["get-started"]}>
            <div className={styles["get-started__container"]}>
                <form onSubmit={handleSubmit(onSubmit)} className={styles["get-started__form"]}>

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
                        {registerFailure && <p>Username is already taken!</p>}
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
                                validate: value => value === password.current || "Your entered passwords don't match"
                            })}
                        />
                        {errors.password2 && <p>{errors.password2.message}</p>}
                    </div>

                    <Button
                        type="submit"
                        btnText={"Continue"}
                    />
                </form>
            </div>
        </div>
    );
}

export default GetStartedFormFreelancer;
