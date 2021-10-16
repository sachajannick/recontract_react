import React from "react";
import styles from "./ChooseUser.module.scss";
import { Link } from "react-router-dom";

function ChooseUserGetStarted() {
    return (
        <div className={styles["choose-user"]}>

            <Link
                to={"/get-started-freelancer"}
                className={styles["choose-user__link"]}>
                I'm a freelancer.
            </Link>

            <Link
                to={"/get-started-hiring"}
                className={styles["choose-user__link"]}>
                I'm a hiring business.
            </Link>

        </div>
    );
}

export default ChooseUserGetStarted;
