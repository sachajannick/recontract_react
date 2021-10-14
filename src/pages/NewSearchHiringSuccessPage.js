import React from "react";
import { LogoBar } from "../components/logoBar/LogoBar";
import GreetingHeader from "../components/greetingHeader/GreetingHeader";

function NewSearchHiringSuccessPage() {
    return (
        <>
            <LogoBar />
            <GreetingHeader
                headLine={"You've created your new search!"}
                secondLine={"Want to go back?"}
                linkName={"logged-in-hiring"}
            />
        </>
    )
}

export default NewSearchHiringSuccessPage;
