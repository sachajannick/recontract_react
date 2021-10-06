import React from "react";
import { LogoBar } from "../components/logoBar/LogoBar";
import GreetingHeader from "../components/greetingHeader/GreetingHeader";

function UploadProfilePictureFreelancerSuccessPage() {
    return (
        <>
            <LogoBar />
            <GreetingHeader
                headLine={"You've successfully uploaded your profile picture!"}
                secondLine={"Want to go back?"}
                linkName={"logged-in-freelancer"}
            />
        </>
    )
}

export default UploadProfilePictureFreelancerSuccessPage;
