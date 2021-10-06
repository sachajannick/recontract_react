import React from "react";
import styles from "./LoggedInChoose.module.scss";
import { Link } from "react-router-dom";

function LoggedInChooseHiring() {
    return (
        <div className={styles["logged-in-choose"]}>
            <Link
                to={"/update-hiring"}
                className={styles["logged-in-choose__link"]}>
                I want to update my profile.
            </Link>
            <Link
                to={"/swipe-panel-hiring"}
                className={styles["logged-in-choose__link"]}>
                I want to go to my swipe panel.
            </Link>
            <Link
                to={"/new-search-hiring"}
                className={styles["logged-in-choose__link"]}>
                I want to create a new search.
            </Link>
            <Link
                to={"/update-search-hiring"}
                className={styles["logged-in-choose__link"]}>
                I want to update my search.
            </Link>
            <Link
                to={"/upload-picture-hiring"}
                className={styles["logged-in-choose__link"]}>
                I want to upload or change my profile picture.
            </Link>
        </div>
    );
}

export default LoggedInChooseHiring;
