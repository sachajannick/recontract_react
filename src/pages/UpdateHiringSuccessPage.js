import React from "react";
import { LogoBar } from "../components/logoBar/LogoBar";
import GreetingHeader from "../components/greetingHeader/GreetingHeader";

function UpdateHiringSuccessPage() {
    return (
        <>
            <LogoBar />
            <GreetingHeader
                headLine={"You've successfully updated your profile!"}
                secondLine={"Want to go back?"}
                linkName={"logged-in-hiring"}
            />
        </>
    )
}

export default UpdateHiringSuccessPage;
