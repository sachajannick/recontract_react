import React, { useState } from "react";
import styles from "./LoggedInChoose.module.scss";
import { Link } from "react-router-dom";
import axios from "axios";

function LoggedInChooseFreelancer() {
    const jwtToken = localStorage.getItem('token');
    const userId = localStorage.getItem('id');
    const [searchIsPresent, setSearchIsPresent] = useState(false);

    async function fetchSearchIsPresent() {
        try {
            const presentOrNot = await axios.get(`http://localhost:8080/api/searches/boolean/id/${userId}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${jwtToken}`,
                }
            })
            setSearchIsPresent(presentOrNot.data);
        } catch (e) {
            console.error(e);
        }
    }

    fetchSearchIsPresent()

    return (
        <div className={styles["logged-in-choose"]}>

            {searchIsPresent ? ( <div className={styles["logged-in-choose__search-present"]}>
                    <Link
                        to={"/update-freelancer"}
                        className={styles["logged-in-choose__search-present__link"]}>
                        I want to update my profile.
                    </Link>
                    <Link
                        to={"/match-panel-freelancer"}
                        className={styles["logged-in-choose__search-present__link"]}>
                        I want to find a new match.
                    </Link>
                    <Link
                        to={"/update-search-freelancer"}
                        className={styles["logged-in-choose__search-present__link"]}>
                        I want to update my search.
                    </Link>
                    <Link
                        to={"/upload-picture-freelancer"}
                        className={styles["logged-in-choose__search-present__link"]}>
                        I want to change my profile picture.
                    </Link>
                </div>

            ) : ( <div className={styles["logged-in-choose__search-not-present"]}>
                    <Link
                        to={"/update-freelancer"}
                        className={styles["logged-in-choose__search-not-present__link"]}>
                        I want to update my profile.
                    </Link>
                    <Link
                        to={"/new-search-freelancer"}
                        className={styles["logged-in-choose__search-not-present__link"]}>
                        I want to create a new search.
                    </Link>
                </div>
            )}

        </div>
    );
}

export default LoggedInChooseFreelancer;
