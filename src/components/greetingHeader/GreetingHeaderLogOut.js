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
            <h2>Welcome!</h2>
            <h3>Please select what you want to do.</h3>

            {user !== null && <button
                className={styles["greeting-header__link"]}
                type="button"
                onClick={onSubmit}
            >
                 Click here to logout.
            </button>}
        </div>
    );
}

export default GreetingHeaderLogOut;
