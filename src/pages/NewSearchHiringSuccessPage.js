import React from "react";
import { LogoBar } from "../components/logoBar/LogoBar";
import GreetingHeaderLoggedIn from "../components/greetingHeader/GreetingHeaderLoggedIn";

function NewSearchHiringSuccessPage() {
    return (
        <>
            <LogoBar />
            <GreetingHeaderLoggedIn
                headLine={"You've created your new search!"}
                secondLine={"Want to start matching?"}
                linkName={"swipe-panel-hiring"}
            />
        </>
    )
}

export default NewSearchHiringSuccessPage;
