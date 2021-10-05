import React from "react";
import { LogoBar } from "../components/logoBar/LogoBar";
import GreetingHeader from "../components/greetingHeader/GreetingHeader";
import NewSearchFormFreelancer from "../components/newSearchForm/NewSearchFormFreelancer";

function NewSearchFreelancerPage() {
    return (
        <>
            <LogoBar />
            <GreetingHeader
                headLine={"Let's get the search started."}
                secondLine={"Want to go back?"}
                linkName={"welcome-freelancer"}
            />
            <NewSearchFormFreelancer />
        </>
    );
}

export default NewSearchFreelancerPage;
