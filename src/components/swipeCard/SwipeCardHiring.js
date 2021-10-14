import React, {useContext, useEffect, useState} from "react";
import styles from "./SwipeCard.module.scss"
import axios from "axios";
import {useForm} from "react-hook-form";
import MyHelper from "../../helpers/MyHelper";
import CountMyList from "../../helpers/CountMyList";

function SwipeCardHiring() {
    const jwtToken = localStorage.getItem('token');
    const { handleSubmit } = useForm();
    const [count, setCount] = useState(0);
    const [length, setLength] = useState(null);
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

        const test = MyHelper(searchResult.data, count);
        console.log(test);

        setFunctionTitle(test.functionTitle);
        setAmount(test.amount);
        setLocation(test.location);
        setHeadline(test.headline);
        setEmail(test.email);
        setFullName(test.fullName);

        console.log(test.searchId);
        const whatNums = test.searchId;
        console.log(whatNums);

        const howMany = CountMyList(searchResult.data);
        setLength(howMany);

        fetchProfilePicture(whatNums);
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
                        id='button'>
                        GO
                    </button>
                </form> : <p>There are no more searches. Refresh to start again!</p>}
            <div className={styles["swipe-card__container"]}>
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SwipeCardHiring;
