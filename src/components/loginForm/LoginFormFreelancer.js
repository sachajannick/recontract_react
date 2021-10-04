import React from "react";
import styles from "./LoginForm.module.scss";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Button } from "../button/Button";

function LoginFormFreelancer() {
    const { handleSubmit, formState: { errors }, register } = useForm();
    const history = useHistory();

    function onFormSubmit() {
        history.push("/logged-in-freelancer");
    }

    return (
        <div className={styles["login"]}>
            <div className={styles["login__container"]}>
                <form onSubmit={handleSubmit(onFormSubmit)} className={styles["login__form"]}>

                    <div>
                        <label
                            htmlFor="username">
                            Username
                        </label>
                        <input
                            className={styles["login__input"]}
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
                            htmlFor="password">
                            Password
                        </label>
                        <input
                            className={styles["login__input"]}
                            type="password"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "Please enter your password",
                                },
                            })}
                        />
                        {errors.password && <p>{errors.password.message}</p>}
                    </div>

                    <Button
                        btnText={"Continue"}
                    />
                </form>
            </div>
        </div>
    );
}

export default LoginFormFreelancer;
