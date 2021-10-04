import React from "react";
import styles from "./ChooseUser.module.scss";
import { Link } from "react-router-dom";

function ChooseUserLogin() {
    return (
        <div className={styles["choose-user"]}>
            <Link
                to={"/login-freelancer"}
                className={styles["choose-user__link"]}>
                I'm a freelancer.
            </Link>
            <Link
                to={"/login-hiring"}
                className={styles["choose-user__link"]}>
                I'm a hiring business.
            </Link>
        </div>
    );
}

export default ChooseUserLogin;