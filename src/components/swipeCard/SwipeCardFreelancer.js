import React, {useContext, useEffect, useState} from "react";
import styles from "./SwipeCard.module.scss"
import dislike from "../../../../recontract/src/assets/dislike.png";
import like from "../../../../recontract/src/assets/like.png";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

function SwipeCardFreelancer() {
    const [userData, setUserData] = useState();
    const [searchData, setSearchData] = useState();
    const [profilePicture, setProfilePicture] = useState();
    const userId = localStorage.getItem('id');
    const jwtToken = localStorage.getItem('token');
    const { user } = useContext(AuthContext);

    useEffect(() => {
        async function fetchSearchData() {
            const searchResult = await axios.get(`http://localhost:8080/api/searches/id/${userId}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${jwtToken}`,
            }},
            )
            console.log(searchResult);
            setSearchData(searchResult.data);
        }
        fetchSearchData();
    }, [])



    useEffect(() => {
        async function fetchProfilePicture() {
            try {
                const pictureResult = await axios.get(`http://localhost:8080/api/users/profile-picture/id/${userId}`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${jwtToken}`,
                    }
                    , responseType: "blob",
                });
                console.log(pictureResult);
                setProfilePicture(URL.createObjectURL(pictureResult.data));
            } catch (e) {
                console.error(e);
            }
        }
        fetchProfilePicture();
    }, [])

    return (
        <div className={styles["swipe-card"]}>
            <div className={styles["swipe-card__button-container"]}>
                <img
                    className={styles["swipe-card__dislike"]}
                    src={dislike}
                    alt="dislike"
                />
            </div>
                <div
                    className={styles["swipe-card__container"]}>
                    <div className={styles["swipe-card__left"]}>
                        <img
                            className={styles["swipe-card__img"]}
                            src={profilePicture}/>
                        <div className={styles["swipe-card__info"]}>
                            <h3>{user.fullName}</h3>
                            {searchData && <h4>€{searchData.amount}</h4>}
                            <h5>{user.location}</h5>
                        </div>
                    </div>
                    <div className={styles["swipe-card__right"]}>
                        <div className={styles["swipe-card__aside"]}>
                            {searchData && <h1>{searchData.functionTitle}</h1>}
                            <h2>"{user.headline}"</h2>
                        </div>
                    </div>
                </div>
            ))}
            <div className={styles["swipe-card__button-container"]}>
                <img
                    className={styles["swipe-card__like"]}
                    src={like}
                    alt="like"
                />
            </div>
        </div>
    )
}

export default SwipeCardFreelancer;
