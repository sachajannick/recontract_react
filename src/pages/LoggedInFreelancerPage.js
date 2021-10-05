import React from "react";
import { LogoBar } from "../components/logoBar/LogoBar";
import GreetingHeaderLogOut from "../components/greetingHeader/GreetingHeaderLogOut";
import LoggedInChooseFreelancer from "../components/loggedInChoose/LoggedInChooseFreelancer";

function LoggedInFreelancerPage() {
    return (
        <>
            <LogoBar />
            <GreetingHeaderLogOut />
            <LoggedInChooseFreelancer />
        </>
    );
}

export default LoggedInFreelancerPage;
