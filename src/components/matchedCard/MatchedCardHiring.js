import React, { useContext, useEffect } from "react";
import styles from "./MatchedCard.module.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

function MatchedCardHiring() {
    const userId = localStorage.getItem('id');
    const { user } = useContext(AuthContext);


    return (
        <div className={styles["matched-card"]}>
            <div
                className={"matched-card__tinder-card"}>
                <div className={styles["matched-card__left"]}>
                    <div
                        className={styles["matched-card__img"]}
                        style={{
                            backgroundImage: `url(${user.url})`
                        }}
                    >
                    </div>
                    <div className={styles["matched-card__info"]}>
                        <h2>{user.name}</h2>
                        <h3>{user.email}</h3>
                    </div>
                </div>

                <div className={styles["matched-card__right"]}>
                    <div className={styles["matched-card__aside"]}>
                        <h1>You've got a match!</h1>
                        <h4>Mail your next client.&nbsp;
                            <Link
                                className={styles["matched-card__aside__link"]}
                                to="/logged-in-freelancer">
                                Click here to go back.
                            </Link></h4>
                    </div>
                </div>
            </div>
            ))}
        </div>
    )
}

export default MatchedCardHiring;
