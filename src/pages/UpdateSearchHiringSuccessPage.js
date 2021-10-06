import React from "react";
import { LogoBar } from "../components/logoBar/LogoBar";
import GreetingHeader from "../components/greetingHeader/GreetingHeader";

function UpdateSearchHiringSuccessPage() {
    return (
        <>
            <LogoBar />
            <GreetingHeader
                headLine={"You've successfully updated your search!"}
                secondLine={"Want to go back?"}
                linkName={"logged-in-hiring"}
            />
        </>
    )
}

export default UpdateSearchHiringSuccessPage;