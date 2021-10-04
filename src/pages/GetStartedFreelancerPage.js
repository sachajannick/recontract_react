import React from "react";
import { LogoBar } from "../components/logoBar/LogoBar";
import GreetingHeaderNotLoggedIn from "../components/greetingHeader/GreetingHeaderLoggedIn";
import GetStartedFormFreelancer from "../components/getStartedForm/GetStartedFormFreelancer";

function GetStartedFreelancerPage() {
    return (
        <>
            <LogoBar />
            <GreetingHeaderNotLoggedIn
                headLine={"Let's get you started."}
                secondLine={"Create your reContract. account. Already registered?"}
                linkName={"login"}
            />
            <GetStartedFormFreelancer />
        </>
    );
}

export default GetStartedFreelancerPage;
