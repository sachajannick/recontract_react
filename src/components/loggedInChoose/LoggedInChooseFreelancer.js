import React from "react";
import styles from "./LoggedInChoose.module.scss";
import { Link } from "react-router-dom";

function LoggedInChooseFreelancer() {
    return (
        <div className={styles["logged-in-choose"]}>
            <Link
                to={"/update-freelancer"}
                className={styles["logged-in-choose__link"]}>
                I want to update my profile.
            </Link>
            <Link
                to={"/swipe-panel-freelancer"}
                className={styles["logged-in-choose__link"]}>
                I want to go to my swipe panel.
            </Link>
            <Link
                to={"/new-search-freelancer"}
                className={styles["logged-in-choose__link"]}>
                I want to create a new search.
            </Link>
        </div>
    );
}
export default LoggedInChooseFreelancer;
