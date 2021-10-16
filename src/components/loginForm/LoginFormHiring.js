import React, { useContext, useState } from "react";
import styles from "./LoginForm.module.scss";
import { useForm } from "react-hook-form";
import { Button } from "../button/Button";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

function LoginFormHiring() {
    const { handleSubmit, formState: { errors }, register } = useForm();
    const [ invalidInput, toggleInvalidInput ] = useState(false);
    const { login } = useContext(AuthContext);
    const history = useHistory();

    async function onSubmit(data) {
        console.log(data);
        try {
            const result = await axios.post('http://localhost:8080/api/auth/signin', {
                username: data.username,
                password: data.password,
            })
            localStorage.setItem('token', result.data.accessToken);
            localStorage.setItem('id', result.data.id);
            login(result.data);
            history.push('/logged-in-hiring');
        } catch (e) {
            console.error(e);
            toggleInvalidInput(true);
        }
    }

    return (
        <div className={styles["login"]}>
            <div className={styles["login__container"]}>
                <form onSubmit={handleSubmit(onSubmit)} className={styles["login__form"]}>

                    <div>
                        <label
                            htmlFor="email">
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
                        {invalidInput && <p>Invalid input. Please try again! </p>}
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

export default LoginFormHiring;
