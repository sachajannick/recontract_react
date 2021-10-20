import React from "react";
import styles from "./ContentSection.module.scss";
import SuccessIcon from "../../assets/successicon.svg";

function ContentSection() {
    return (
        <div className={styles["content-section"]}>
            <div className={styles["content-section__container"]}>

                <div className={styles["content-section__text"]}>
                    <h2>Three steps,<br/> instant success.</h2>
                    <h3>It’s that easy. <span> Just create your search, click through our database and sign
                        your next contract.</span></h3>
                </div>

                <div className={styles["content-section__icon__container"]}>
                    <img className={styles["content-section__icon"]} src={SuccessIcon} alt="success!" />
                </div>

            </div>
        </div>
    );
}

export default ContentSection;
