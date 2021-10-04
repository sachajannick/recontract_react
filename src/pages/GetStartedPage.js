import React from "react";
import { LogoBar } from "../components/logoBar/LogoBar";
import GreetingHeaderNotLoggedIn from "../components/greetingHeader/GreetingHeaderLoggedIn";
import ChooseUserGetStarted from "../components/chooseUser/ChooseUserGetStarted";

function GetStartedPage() {
    return (
        <>
            <LogoBar />
            <GreetingHeaderNotLoggedIn
                headLine={"Let's get you started."}
                secondLine={"Create your reContract. account. Already registered?"}
                linkName={"login"}
            />
            <ChooseUserGetStarted />
        </>
    );
}

export default GetStartedPage;
