import React from "react";
import { LogoBar } from "../components/logoBar/LogoBar";
import GreetingHeader from "../components/greetingHeader/GreetingHeader";
import GetStartedFormFreelancer from "../components/getStartedForm/GetStartedFormFreelancer";

function UpdateFreelancerPage() {
    return (
        <>
            <LogoBar />
            <GreetingHeader
                headLine={"Let's update your profile."}
                secondLine={"Want to go back?"}
                linkName={"logged-in-freelancer"}
            />
            <GetStartedFormFreelancer />
        </>
    );
}

export default UpdateFreelancerPage;
