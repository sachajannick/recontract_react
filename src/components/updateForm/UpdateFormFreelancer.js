import React, { useRef, useState } from "react";
import styles from "./UpdateForm.module.scss";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Button } from "../button/Button";
import axios from "axios";

function UpdateFormFreelancer() {
    const { handleSubmit, formState: { errors }, register, watch } = useForm();
    const password = useRef({});
    password.current = watch("password");
    const [ updateSuccess, toggleUpdateSuccess ] = useState(false);
    const history = useHistory();
    const userId = localStorage.getItem('id');
    const jwtToken = localStorage.getItem('token');

    async function onSubmit(data) {
        console.log(data);
        try {
            const result = await axios.patch(`http://localhost:8080/api/users/id/${userId}`, {
                username: data.username,
                password: data.password,
            },{
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${jwtToken}`,
                }},
            )
            console.log(result);
            toggleUpdateSuccess(true);
            history.push('/update-freelancer-success');
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div className={styles["update"]}>
            <div className={styles["update__container"]}>
                <form onSubmit={handleSubmit(onSubmit)} className={styles["update__form"]}>

                    <div>
                        <label
                            htmlFor="username">
                            Username
                        </label>
                        <input
                            className={styles["update__input"]}
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
                            Password (min. 8 characters)
                        </label>
                        <input
                            className={styles["update__input"]}
                            type="password"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "Please enter your password",
                                },
                                minLength: {
                                    value: 8,
                                    message: "Password needs to be at least 8 characters"
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
                            className={styles["update__input"]}
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
                    {updateSuccess && <p>Registration successful!</p>}
                </form>
            </div>
        </div>
    );
}

export default UpdateFormFreelancer;
