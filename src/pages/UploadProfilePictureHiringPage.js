import React from "react";
import { LogoBar } from "../components/logoBar/LogoBar";
import GreetingHeader from "../components/greetingHeader/GreetingHeader";
import UploadProfilePictureHiring from "../components/uploadProfilePicture/UploadProfilePictureHiring";

function UploadProfilePictureHiringPage() {
    return (
        <>
            <LogoBar />
            <GreetingHeader
                headLine={"Let's upload your profile picture."}
                secondLine={"Want to go back?"}
                linkName={"logged-in-hiring"}
            />
            <UploadProfilePictureHiring />
        </>
    );
}

export default UploadProfilePictureHiringPage;