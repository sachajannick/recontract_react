import React from "react";
import { LogoBar } from "../components/logoBar/LogoBar";
import GreetingHeaderLogOut from "../components/greetingHeader/GreetingHeaderLogOut";
import LoggedInChooseHiring from "../components/loggedInChoose/LoggedInChooseHiring"

function LoggedInHiringPage() {
    return (
        <>
            <LogoBar />
            <GreetingHeaderLogOut />
            <LoggedInChooseHiring />
        </>
    );
}

export default LoggedInHiringPage;
