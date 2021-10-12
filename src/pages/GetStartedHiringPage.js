import React from "react";
import { LogoBar } from "../components/logoBar/LogoBar";
import GreetingHeader from "../components/greetingHeader/GreetingHeader";
import GetStartedFormHiring from "../components/getStartedForm/GetStartedFormHiring";

function GetStartedHiringPage() {
    return (
        <>
            <LogoBar />
            <GreetingHeader
                headLine={"Let's get you started."}
                secondLine={"Create your reContract. account. Already registered?"}
                linkName={"login-hiring"}
            />
            <GetStartedFormHiring />
        </>
    );
}

export default GetStartedHiringPage;
