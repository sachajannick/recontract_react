import React, {useState} from "react";
import styles from "./MatchedCard.module.scss";
import demo1 from "../../../../recontract/src/assets/demo1.jpg";
import TinderCard from "react-tinder-card";
import {Link} from "react-router-dom";

function MatchedCardFreelancer() {
    const [people, setPeople] = useState([
        {
            name: "Sam Kessels",
            url: demo1,
            email: "s.kessels@kpmg.nl"
        }
    ]);

    return (
        <div className={styles["matched-card"]}>
            {people.map((person) => (
                <TinderCard
                    className={"matched-card__tinder-card"}
                    key={person.name}
                    preventSwipe={["up", "down", "left", "right"]}>
                    <div className={styles["matched-card__left"]}>
                        <div
                            className={styles["matched-card__img"]}
                            style={{
                                backgroundImage: `url(${person.url})`
                            }}
                        >
                        </div>
                        <div className={styles["matched-card__info"]}>
                            <h2>{person.name}</h2>
                            <h3>{person.email}</h3>
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
                </TinderCard>
            ))}
        </div>
    )
}

export default MatchedCardFreelancer;
