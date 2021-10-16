import React from "react";
import { LogoBar } from "../components/logoBar/LogoBar";
import GreetingHeader from "../components/greetingHeader/GreetingHeader";

function NewSearchHiringSuccessPage() {
    return (
        <>
            <LogoBar />
            <GreetingHeader
                headLine={"You've created your new search!"}
                secondLine={"Now let's upload a profile picture!"}
                linkName={"upload-picture-hiring"}
            />
        </>
    )
}

export default NewSearchHiringSuccessPage;
