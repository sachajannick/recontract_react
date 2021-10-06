import React, {useContext} from "react";
import styles from "./GreatingHeader.module.scss"
import { AuthContext } from "../../context/AuthContext";

function GreetingHeaderLogOut() {

    const { user , logout } = useContext(AuthContext);

    function onSubmit() {
        logout();
    }

    return (
        <div className={styles["greeting-header"]}>
            <h2>Welcome back!</h2>
            <h3>Please select what you want to do. Want to log out?&nbsp;

            {user !== null && <span
                className={styles["greeting-header__link"]}
                onClick={onSubmit}>
                 Click here.
            </span>}
            </h3>
        </div>
    );
}

export default GreetingHeaderLogOut;