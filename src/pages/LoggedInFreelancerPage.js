import React from "react";
import { LogoBar } from "../components/logoBar/LogoBar";
import GreetingHeader from "../components/greetingHeader/GreetingHeader";
import LoggedInChooseFreelancer from "../components/loggedInChoose/LoggedInChooseFreelancer";

function LoggedInFreelancerPage() {
    return (
        <>
            <LogoBar />
            <GreetingHeader
                headLine={"Welcome!"}
                secondLine={"Please select what you want to do. Want to log out? "}
                linkName={""}
            />
            <LoggedInChooseFreelancer />
        </>
    );
}

export default LoggedInFreelancerPage;
