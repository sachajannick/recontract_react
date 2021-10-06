import React from "react";
import { LogoBar } from "../components/logoBar/LogoBar";
import GreetingHeader from "../components/greetingHeader/GreetingHeader";
import UploadProfilePictureFreelancer from "../components/uploadProfilePicture/UploadProfilePictureFreelancer";

function UploadProfilePictureFreelancerPage() {
    return (
        <>
            <LogoBar />
            <GreetingHeader
                headLine={"Let's upload your profile picture."}
                secondLine={"Want to go back?"}
                linkName={"logged-in-freelancer"}
            />
            <UploadProfilePictureFreelancer />
        </>
    );
}

export default UploadProfilePictureFreelancerPage;