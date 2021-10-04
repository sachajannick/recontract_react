import React from "react";
import { LogoBar } from "../components/logoBar/LogoBar";
import GreetingHeaderLoggedIn from "../components/greetingHeader/GreetingHeaderLoggedIn";
import GetStartedFormFreelancer from "../components/getStartedForm/GetStartedFormFreelancer";

function UpdateFreelancerPage() {
    return (
        <>
            <LogoBar />
            <GreetingHeaderLoggedIn
                headLine={"Let's update your profile."}
                secondLine={"Want to go back?"}
                linkName={"logged-in-freelancer"}
            />
            <GetStartedFormFreelancer />
        </>
    );
}

export default UpdateFreelancerPage;
