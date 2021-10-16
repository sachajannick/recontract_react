import React, { useState } from "react";
import styles from "./MatchCard.module.scss"
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import IterateThroughList from "../../helpers/IterateThroughList";
import CountLengthOfList from "../../helpers/CountLengthOfList";

function MatchCardHiring() {
    const jwtToken = localStorage.getItem('token');
    const { handleSubmit } = useForm();
    const [count, setCount] = useState(0);
    const [length, setLength] = useState(null);
    const [startMatch, setStartMatch] = useState(false);
    const [functionTitle, setFunctionTitle] = useState();
    const [amount, setAmount] = useState();
    const [location, setLocation] = useState();
    const [headline, setHeadline] = useState();
    const [email, setEmail] = useState();
    const [fullName, setFullName] = useState();
    const [profilePicture, setProfilePicture] = useState();

    async function fetchProfilePicture(photo) {
        try {
            const result = await axios.get(`http://localhost:8080/api/searches/profile-picture/id/${photo}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${jwtToken}`,
                }
                , responseType: "blob",
            });
            setProfilePicture(URL.createObjectURL(result.data));
        } catch (e) {
            console.error(e);
        }
    }

    async function fetchSearchData() {
        const searchResult = await axios.get(`http://localhost:8080/api/searches/freelancer`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${jwtToken}`,
            }},
        )

        const result = IterateThroughList(searchResult.data, count);

        setFunctionTitle(result.functionTitle);
        setAmount(result.amount);
        setLocation(result.location);
        setHeadline(result.headline);
        setEmail(result.email);
        setFullName(result.fullName);

        const whatNums = result.searchId;

        const howMany = CountLengthOfList(searchResult.data);
        setLength(howMany);

        fetchProfilePicture(whatNums);
    }

    function pushUser() {
        setCount((count + 1));
        fetchSearchData();
    }

    return (
        <div className={styles["swipe-card"]}>

            {length === null || count < length ?
                <form onSubmit={handleSubmit(pushUser)}>
                    <button
                        className={styles["swipe-card__btn"]}
                        type="submit"
                        id='button'
                        onClick={() => setStartMatch(true)}>
                        GO
                    </button>
                </form> : <p>The end! Refresh this page to start again or
                    <Link
                        to={"/logged-in-hiring"}
                        className={styles["swipe-card__link"]}> click here </Link>to go back.</p>}

            {startMatch ? ( <div className={styles["swipe-card__container"]}>
                <div className={styles["swipe-card__left"]}>
                    <img
                        className={styles["swipe-card__img"]}
                        src={profilePicture}/>
                    <div className={styles["swipe-card__info"]}>
                        <h3>{fullName}</h3>
                        <h4>€{amount}</h4>
                        <h5>{location}</h5>
                    </div>
                </div>

                <div className={styles["swipe-card__right"]}>
                    <div className={styles["swipe-card__aside"]}>
                        <h1>Profession:<br/>{functionTitle}</h1>}
                        <h2>"{headline}"</h2>
                        <h6>{email}</h6>
                    </div>
                </div>
            </div> ) : null}

        </div>
    )
}

export default MatchCardHiring;
