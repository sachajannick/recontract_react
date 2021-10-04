import React from "react";
import styles from "./GreatingHeader.module.scss"
import { Link } from "react-router-dom";

function GreetingHeaderLoggedIn({headLine, secondLine, linkName}) {
    return (
        <div className={styles["greeting-header"]}>
            <h2>{headLine}</h2>
            <h3>{secondLine}
                <Link
                    to={"/"+linkName}
                    className={styles["greeting-header__link"]}> Click here.
                </Link>
            </h3>
        </div>
    );
}

export default GreetingHeaderLoggedIn;
