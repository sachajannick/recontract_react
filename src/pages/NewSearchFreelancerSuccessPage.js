import React from "react";
import { LogoBar } from "../components/logoBar/LogoBar";
import GreetingHeaderLoggedIn from "../components/greetingHeader/GreetingHeaderLoggedIn";

function NewSearchFreelancerSuccessPage() {
    return (
        <>
            <LogoBar />
            <GreetingHeaderLoggedIn
                headLine={"You've created your new search!"}
                secondLine={"Want to start matching?"}
                linkName={"swipe-panel-freelancer"}
            />
        </>
    )
}

export default NewSearchFreelancerSuccessPage;
