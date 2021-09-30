import React from "react";
import { LogoBar } from "../components/logoBar/LogoBar";
import GreetingHeader from "../components/greetingHeader/GreetingHeader";
import NewSearchFormHiring from "../components/newSearchForm/NewSearchFormHiring";

function NewSearchHiringPage() {
    return (
        <>
            <LogoBar />
            <GreetingHeader
                headLine={"Let's get the search started."}
                secondLine={"Want to go back?"}
                linkName={"logged-in-hiring"}
            />
            <NewSearchFormHiring />
        </>
    );
}

export default NewSearchHiringPage;
