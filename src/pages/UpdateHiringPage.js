import React from "react";
import { LogoBar } from "../components/logoBar/LogoBar";
import GreetingHeader from "../components/greetingHeader/GreetingHeader";
import UpdateFormHiring from "../components/updateForm/UpdateFormHiring";

function UpdateHiringPage() {
    return (
        <>
            <LogoBar />
            <GreetingHeader
                headLine={"Let's update your profile."}
                secondLine={"Want to go back?"}
                linkName={"logged-in-hiring"}
            />
            <UpdateFormHiring />
        </>
    );
}

export default UpdateHiringPage;
