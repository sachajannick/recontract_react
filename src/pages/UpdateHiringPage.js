import React from "react";
import { LogoBar } from "../components/logoBar/LogoBar";
import GreetingHeader from "../components/greetingHeader/GreetingHeader";
import GetStartedFormHiring from "../components/getStartedForm/GetStartedFormHiring";

function UpdateHiringPage() {
    return (
        <>
            <LogoBar />
            <GreetingHeader
                headLine={"Let's update your profile."}
                secondLine={"Want to go back?"}
                linkName={"logged-in-hiring"}
            />
            <GetStartedFormHiring />
        </>
    );
}

export default UpdateHiringPage;
