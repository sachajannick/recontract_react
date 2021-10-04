import React from "react";
import styles from "./Button.module.scss"

export const Button = ({btnText}) => {
    return (
        <button className={styles["btn"]}>
            {btnText}
        </button>
    )
};
