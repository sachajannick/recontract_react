import React, { useState } from "react";
import styles from "./SwipeCard.module.scss"
import axios from "axios";
import { useForm } from "react-hook-form";
import MyHelper from "../../helpers/MyHelper";
import CountMyList from "../../helpers/CountMyList";

function SwipeCardHiring() {
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
            console.log(result);
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

        const result = MyHelper(searchResult.data, count);

        setFunctionTitle(result.functionTitle);
        setAmount(result.amount);
        setLocation(result.location);
        setHeadline(result.headline);
        setEmail(result.email);
        setFullName(result.fullName);

        const whatId = result.searchId;

        const howMany = CountMyList(searchResult.data);
        setLength(howMany);

        fetchProfilePicture(whatId);
    }

    function pushUser() {
        setCount((count +1));
        console.log(count);
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
                </form> : <p>The end! Refresh this page to start again.</p>}
            {startMatch ? (<div className={styles["swipe-card__container"]}>
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
                        <h1>{functionTitle}</h1>}
                        <h2>"{headline}"</h2>
                        <h6>{email}</h6>
                    </div>
                </div>
            </div> ) : null}
        </div>
    )
}

export default SwipeCardHiring;
