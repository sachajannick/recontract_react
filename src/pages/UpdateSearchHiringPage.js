import React from "react";
import { LogoBar } from "../components/logoBar/LogoBar";
import GreetingHeader from "../components/greetingHeader/GreetingHeader";
import UpdateSearchFormHiring from "../components/updateSearchForm/UpdateSearchFormHiring";

function UpdateSearchHiringPage() {
    return (
        <>
            <LogoBar />
            <GreetingHeader
                headLine={"Let's update your search."}
                secondLine={"Want to go back?"}
                linkName={"logged-in-hiring"}
            />
            <UpdateSearchFormHiring />
        </>
    );
}

export default UpdateSearchHiringPage;
