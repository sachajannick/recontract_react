import React from "react";
import { LogoBar } from "../components/logoBar/LogoBar";
import GreetingHeaderLoggedIn from "../components/greetingHeader/GreetingHeaderLoggedIn";
import LoggedInChooseFreelancer from "../components/loggedInChoose/LoggedInChooseFreelancer";

function LoggedInFreelancerPage() {
    return (
        <>
            <LogoBar />
            <GreetingHeaderLoggedIn
                headLine={"Welcome!"}
                secondLine={"Please select what you want to do. Want to log out? "}
                linkName={""}
            />
            <LoggedInChooseFreelancer />
        </>
    );
}

export default LoggedInFreelancerPage;
