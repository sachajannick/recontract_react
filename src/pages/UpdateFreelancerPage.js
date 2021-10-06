import React from "react";
import { LogoBar } from "../components/logoBar/LogoBar";
import GreetingHeader from "../components/greetingHeader/GreetingHeader";
import UpdateFormFreelancer from "../components/updateForm/UpdateFormFreelancer";

function UpdateFreelancerPage() {
    return (
        <>
            <LogoBar />
            <GreetingHeader
                headLine={"Let's update your profile."}
                secondLine={"Want to go back?"}
                linkName={"logged-in-freelancer"}
            />
            <UpdateFormFreelancer />
        </>
    );
}

export default UpdateFreelancerPage;
