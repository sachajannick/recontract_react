import React, {useContext} from "react";
import styles from "./LoggedInChoose.module.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function LoggedInChooseFreelancer() {
    const { user , logout } = useContext(AuthContext);

    function onSubmit() {
        logout();
    }

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
            <Link
                to={"/update-search-freelancer"}
                className={styles["logged-in-choose__link"]}>
                I want to update my search.
            </Link>
            <Link
                to={"/upload-picture-freelancer"}
                className={styles["logged-in-choose__link"]}>
                I want to upload or change my profile picture.
            </Link>
        </div>
    );
}
export default LoggedInChooseFreelancer;
