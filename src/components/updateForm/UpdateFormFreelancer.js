import React, {useRef, useState} from "react";
import styles from "./UpdateForm.module.scss";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Button } from "../button/Button";
import axios from "axios";

function UpdateFormFreelancer() {
    const { handleSubmit, formState: { errors }, register, watch } = useForm();
    const password = useRef({});
    password.current = watch("newPassword");
    const [ updateSuccess, toggleUpdateSuccess ] = useState(false);
    const history = useHistory();
    const userId = localStorage.getItem('id');
    const jwtToken = localStorage.getItem('token');

    async function onSubmit(data) {
        console.log(data);
        try {
            const result = await axios.patch(`http://localhost:8080/api/users/id/${userId}`, {
                newUsername: data.newUsername,
                newPassword: data.newPassword,
                newFullName: data.newFullName,
                newEmail: data.newEmail,
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
                            htmlFor="newFullName">
                            Full name
                        </label>
                        <input
                            className={styles["update__input"]}
                            type="text"
                            {...register("newFullName", {
                                required: {
                                    value: true,
                                    message: "Please enter your full name",
                                },
                            })}
                        />
                        {errors.newFullName && <p>{errors.newFullName.message}</p>}
                    </div>

                    <div>
                        <label
                            htmlFor="newUsername">
                            Username
                        </label>
                        <input
                            className={styles["update__input"]}
                            type="text"
                            {...register("newUsername", {
                                required: {
                                    value: true,
                                    message: "Please enter your username",
                                },
                            })}
                        />
                        {errors.newUsername && <p>{errors.newUsername.message}</p>}
                    </div>

                    <div>
                        <label
                            htmlFor="newEmail">
                            Email
                        </label>
                        <input
                            className={styles["update__input"]}
                            type="email"
                            {...register("newEmail", {
                                required: {
                                    value: true,
                                    pattern: !/\S+@\S+\.\S+/,
                                    message: "Please enter your email",
                                },
                            })}
                        />
                        {errors.newEmail && <p>{errors.newEmail.message}</p>}
                    </div>

                    <div>
                        <label
                            htmlFor="newPassword">
                            Password (min. 8 characters)
                        </label>
                        <input
                            className={styles["update__input"]}
                            type="password"
                            {...register("newPassword", {
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
                        {errors.newPassword && <p>{errors.newPassword.message}</p>}
                    </div>

                    <div>
                        <label
                            htmlFor="newPassword2">
                            Confirm password
                        </label>
                        <input
                            className={styles["update__input"]}
                            type="password"
                            {...register("newPassword2", {
                                required: {
                                    value: true,
                                    message: "Please re-enter your password",
                                },
                                minLength: {
                                    value: 8,
                                    message: "Password needs to be at least 8 characters"
                                },
                                validate: value => value === password.current || "Your entered passwords don't match"
                            })}
                        />
                        {errors.newPassword2 && <p>{errors.newPassword2.message}</p>}
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
