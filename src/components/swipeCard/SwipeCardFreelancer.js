import React, {useEffect, useMemo, useState} from "react";
import styles from "./SwipeCard.module.scss"
import demo1 from "../../../../recontract/src/assets/demo1.jpg"
import demo2 from "../../../../recontract/src/assets/demo2.jpg"
import TinderCard from "react-tinder-card";
import dislike from "../../../../recontract/src/assets/dislike.png";
import like from "../../../../recontract/src/assets/like.png";
import {Link} from "react-router-dom";
import axios from "axios";

function SwipeCardFreelancer() {
    const [people, setPeople] = useState([]);
    const userId = localStorage.getItem('id');

    useEffect(() => {
        async function fetchUserData() {
            const result = await axios.get(`http://localhost:8080/api/users/id/${userId}`);

            setPeople(result.data)
        }
    })

    useEffect(() => {
        async function fetchSearchData() {
            const searchResult = await axios.get(`http://localhost:8080/api/searches/id/${userId}`);
        }
    })

    const [lastDirection, setLastDirection] = useState();

    const childRefs = useMemo(() => Array(people.length).fill(0).map(i => React.createRef()), []);

    const alreadyRemoved = [];
    let peopleState = people; // This fixes issues with updating characters state forcing it to use the current state and not the state that was active when the card was created.

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)
        setLastDirection(direction)
        alreadyRemoved.push(nameToDelete)
    }

    const outOfFrame = (name) => {
        console.log(name + " left the screen!");
        peopleState = peopleState.filter(person => person.name !== name)
        setPeople(peopleState)
    }

    const swipe = (dir) => {
        const cardsLeft = people.filter(person => !alreadyRemoved.includes(person.name))
        if (cardsLeft.length) {
            const toBeRemoved = cardsLeft[cardsLeft.length - 1].name // Find the card object to be removed
            const index = people.map(person => person.name).indexOf(toBeRemoved) // Find the index of which to make the reference to
            alreadyRemoved.push(toBeRemoved) // Make sure the next card gets removed next time if this card do not have time to exit the screen
            childRefs[index].current.swipe(dir) // Swipe the card!
        }
    }

    return (
        <div className={styles["swipe-card"]}>
            <div className={styles["swipe-card__button-container"]}>
                <img
                    className={styles["swipe-card__dislike"]}
                    src={dislike}
                    alt="dislike"
                    onClick={() => swipe('left')}
                />
            </div>
            {people.map((person, index) => (
                <TinderCard
                    className={styles["swipe-card__container"]}
                    ref={childRefs[index]}
                    key={person.name}
                    preventSwipe={["up", "down"]}
                    onSwipe={(dir) => swiped(dir, person.name)}
                    onCardLeftScreen={() => outOfFrame(person.name)}
                >
                    <div className={styles["swipe-card__left"]}>
                        <div
                            className={styles["swipe-card__img"]}
                            style={{
                                backgroundImage: `url(${person.url})`
                            }}
                        >
                        </div>
                        <div className={styles["swipe-card__info"]}>
                            <h3>{person.name}</h3>
                            <h4>{person.amount}</h4>
                            <h5>{person.location}</h5>
                        </div>
                    </div>
                    <div className={styles["swipe-card__right"]}>
                        <div className={styles["swipe-card__aside"]}>
                            <h1>{person.functionTitle}</h1>
                            <h2>{person.headline}</h2>
                        </div>
                    </div>
                </TinderCard>
            ))}
            <div className={styles["swipe-card__button-container"]}>
                <img
                    className={styles["swipe-card__like"]}
                    src={like}
                    alt="like"
                    onClick={() => swipe('right')}
                />
            </div>
        </div>
    )
}

export default SwipeCardFreelancer;
