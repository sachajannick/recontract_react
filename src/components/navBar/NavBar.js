import React from "react";
import styles from "./NavBar.module.scss";
import { Link } from "react-router-dom";
import { Logo } from "../logo/Logo";

function NavBar() {
    return (
        <nav className={styles["navbar"]}>

            <div className={styles["navbar__menu"]}>
                <Link
                    to="/login"
                    className={styles["navbar__link"]}>
                    Login here
                </Link>
            </div>

            <Logo />
        </nav>
    );
}

export default NavBar;
