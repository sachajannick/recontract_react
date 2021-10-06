import React from "react";
import { LogoBar } from "../components/logoBar/LogoBar";
import GreetingHeader from "../components/greetingHeader/GreetingHeader";
import UpdateSearchFormFreelancer from "../components/updateSearchForm/UpdateSearchFormFreelancer";

function UpdateSearchFreelancerPage() {
    return (
        <>
            <LogoBar />
            <GreetingHeader
                headLine={"Let's update your search."}
                secondLine={"Want to go back?"}
                linkName={"welcome-freelancer"}
            />
            <UpdateSearchFormFreelancer />
        </>
    );
}

export default UpdateSearchFreelancerPage;
