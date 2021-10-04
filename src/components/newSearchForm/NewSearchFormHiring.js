import React from "react";
import styles from "./NewSearchForm.module.scss"
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Button } from "../button/Button";

function NewSearchFormHiring() {
    const { handleSubmit, formState: { errors }, register } = useForm();
    const history = useHistory();

    function onFormSubmit() {
        history.push("/new-search-hiring-success");
    }

    return (
        <div className={styles["new-search"]}>
            <div className={styles["new-search__container"]}>
                <form onSubmit={handleSubmit(onFormSubmit)} className={styles["new-search__form"]}>

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
                            I want to spend around:
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

                    <Button
                        btnText={"Continue"}
                    />
                </form>
            </div>
        </div>
    );
}

export default NewSearchFormHiring;
