import React from "react";
import { LogoBar } from "../components/logoBar/LogoBar";
import GreetingHeaderLoggedIn from "../components/greetingHeader/GreetingHeaderLoggedIn";
import GetStartedFormHiring from "../components/getStartedForm/GetStartedFormHiring";

function UpdateHiringPage() {
    return (
        <>
            <LogoBar />
            <GreetingHeaderLoggedIn
                headLine={"Let's update your profile."}
                secondLine={"Want to go back?"}
                linkName={"logged-in-hiring"}
            />
            <GetStartedFormHiring />
        </>
    );
}

export default UpdateHiringPage;
