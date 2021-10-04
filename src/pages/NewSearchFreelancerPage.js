import React from "react";
import { LogoBar } from "../components/logoBar/LogoBar";
import GreetingHeaderLoggedIn from "../components/greetingHeader/GreetingHeaderLoggedIn";
import NewSearchFormFreelancer from "../components/newSearchForm/NewSearchFormFreelancer";

function NewSearchFreelancerPage() {
    return (
        <>
            <LogoBar />
            <GreetingHeaderLoggedIn
                headLine={"Let's get the search started."}
                secondLine={"Want to go back?"}
                linkName={"welcome-freelancer"}
            />
            <NewSearchFormFreelancer />
        </>
    );
}

export default NewSearchFreelancerPage;
