import React from "react";
import { LogoBar } from "../components/logoBar/LogoBar";
import GreetingHeader from "../components/greetingHeader/GreetingHeader";
import GetStartedFormFreelancer from "../components/getStartedForm/GetStartedFormFreelancer";

function GetStartedFreelancerPage() {
    return (
        <>
            <LogoBar />
            <GreetingHeader
                headLine={"Let's get you started."}
                secondLine={"Create your reContract. account. Already registered?"}
                linkName={"login"}
            />
            <GetStartedFormFreelancer />
        </>
    );
}

export default GetStartedFreelancerPage;
