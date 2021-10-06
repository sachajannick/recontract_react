import React from "react";
import { LogoBar } from "../components/logoBar/LogoBar";
import GreetingHeader from "../components/greetingHeader/GreetingHeader";

function UpdateFreelancerSuccessPage() {
    return (
        <>
            <LogoBar />
            <GreetingHeader
                headLine={"You've successfully updated your profile!"}
                secondLine={"Want to go back?"}
                linkName={"logged-in-freelancer"}
            />
        </>
    )
}

export default UpdateFreelancerSuccessPage;
