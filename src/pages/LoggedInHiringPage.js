import React from "react";
import { LogoBar } from "../components/logoBar/LogoBar";
import GreetingHeader from "../components/greetingHeader/GreetingHeader";
import LoggedInChooseHiring from "../components/loggedInChoose/LoggedInChooseHiring"

function LoggedInHiringPage() {
    return (
        <>
            <LogoBar />
            <GreetingHeader
                headLine={"Welcome!"}
                secondLine={"Please select what you want to do. Want to log out? "}
                linkName={""}
            />
            <LoggedInChooseHiring />
        </>
    );
}

export default LoggedInHiringPage;
