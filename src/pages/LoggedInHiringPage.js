import React from "react";
import { LogoBar } from "../components/logoBar/LogoBar";
import GreetingHeaderLoggedIn from "../components/greetingHeader/GreetingHeaderLoggedIn";
import LoggedInChooseHiring from "../components/loggedInChoose/LoggedInChooseHiring"

function LoggedInHiringPage() {
    return (
        <>
            <LogoBar />
            <GreetingHeaderLoggedIn
                headLine={"Welcome!"}
                secondLine={"Please select what you want to do. Want to log out? "}
                linkName={""}
            />
            <LoggedInChooseHiring />
        </>
    );
}

export default LoggedInHiringPage;
