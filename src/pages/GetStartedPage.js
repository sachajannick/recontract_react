import React from "react";
import { LogoBar } from "../components/logoBar/LogoBar";
import GreetingHeader from "../components/greetingHeader/GreetingHeader";
import ChooseUserGetStarted from "../components/chooseUser/ChooseUserGetStarted";

function GetStartedPage() {
    return (
        <>
            <LogoBar />
            <GreetingHeader
                headLine={"Let's get you started."}
                secondLine={"Create your reContract. account. Already registered?"}
                linkName={"login"}
            />
            <ChooseUserGetStarted />
        </>
    );
}

export default GetStartedPage;
