import React, { useRef } from "react";
import styles from "./GetStartedForm.module.scss";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Button } from "../button/Button";

function GetStartedFormFreelancer() {
    const { handleSubmit, formState: { errors }, register, watch } = useForm();
    const password = useRef({});
    password.current = watch("password");
    const history = useHistory();

    // const onSubmit = (data) => {
    //     const storageRef = app.storage().ref();
    //     const fileRef = storageRef.child(data.image[0].name);
    //     fileRef.put(data.image[0]).then(() => {
    //
    //     });
    // }

    function onFormSubmit() {
        history.push("/logged-in-freelancer");
    }

    return (
        <div className={styles["get-started"]}>
            <div className={styles["get-started__container"]}>
                <form onSubmit={handleSubmit(onFormSubmit)} className={styles["get-started__form"]}>

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
                            className={styles["get-started__input"]}
                            type="password"
                            {...register("password2", {
                                required: {
                                    value: true,
                                    message: "Please re-enter your password",
                                },
                                minLength: {
                                    value: 8,
                                    message: "Password needs to be at least 8 characters"
                                },
                                validate: value => value === password.current || "The passwords don't match"
                            })}
                        />
                        {errors.password2 && <p>{errors.password2.message}</p>}
                    </div>

                    <div>
                        <label
                            htmlFor="profilePicture">
                            Profile picture
                        </label>
                        <input
                            ref={register}
                            className={styles["get-started__input"]}
                            type="file"
                            accept="image/*"
                            multiple="false"
                            {...register("profilePicture", {
                                required: {
                                    value: true,
                                    message: "Please upload your profile picture",
                                },
                            })}
                        />
                        {errors.profilePicture && <p>{errors.profilePicture.message}</p>}
                    </div>

                    <Button
                        btnText={"Continue"}
                    />
                </form>
            </div>
        </div>
    );
}

export default GetStartedFormFreelancer;
