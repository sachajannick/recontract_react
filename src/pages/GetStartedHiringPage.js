import React from "react";
import { LogoBar } from "../components/logoBar/LogoBar";
import GreetingHeaderNotLoggedIn from "../components/greetingHeader/GreetingHeaderLoggedIn";
import GetStartedFormHiring from "../components/getStartedForm/GetStartedFormHiring";

function GetStartedHiringPage() {
    return (
        <>
            <LogoBar />
            <GreetingHeaderNotLoggedIn
                headLine={"Let's get you started."}
                secondLine={"Create your reContract. account. Already registered?"}
                linkName={"login"}
            />
            <GetStartedFormHiring />
        </>
    );
}

export default GetStartedHiringPage;
