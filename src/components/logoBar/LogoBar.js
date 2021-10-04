import React from "react";
import styles from "./LogoBar.module.scss";
import { Logo } from "../logo/Logo";

export function LogoBar() {
    return (
        <div className={styles["logo"]}>
            <Logo />
        </div>
    );
}
