import React from "react";
import { LogoBar } from "../components/logoBar/LogoBar";
import GreetingHeader from "../components/greetingHeader/GreetingHeader";
import UpdateSearchFormFreelancer from "../components/updateSearchForm/UpdateSearchFormFreelancer";
import UpdateSearchFormHiring from "../components/updateSearchForm/UpdateSearchFormHiring";

function UpdateSearchHiringPage() {
    return (
        <>
            <LogoBar />
            <GreetingHeader
                headLine={"Let's update your search."}
                secondLine={"Want to go back?"}
                linkName={"welcome-freelancer"}
            />
            <UpdateSearchFormHiring />
        </>
    );
}

export default UpdateSearchHiringPage;
