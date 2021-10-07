import React from "react";
import styles from "./WelcomeSection.module.scss";
import { Link } from "react-router-dom";
import { Button } from "../button/Button";

function WelcomeSection() {
    return (
        <div
            className={styles["welcome-section"]}>
            <h3>BUILD FOR BOTH FREELANCERS AND HIRING BUSINESSES</h3>
            <h1>Contracting <span>re</span>done.</h1>
            <h2>You seek, we provide, you contract.</h2>
            <h4>Created out of the need to simplify contracting in Software Engineering through simple and
                no-nonsense matchmaking.</h4>
            <Link to={"/get-started"}>
                <Button
                    btnText={"Get Started"}
                />
            </Link>
        </div>
    )
}

export default WelcomeSection;
