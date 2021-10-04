import React from "react";
import { LogoBar } from "../components/logoBar/LogoBar";
import GreetingHeaderNotLoggedIn from "../components/greetingHeader/GreetingHeaderLoggedIn";
import ChooseUserLogin from "../components/chooseUser/ChooseUserLogin";

function LoginPage() {
    return (
        <>
            <LogoBar />
            <GreetingHeaderNotLoggedIn
                headLine={"Welcome back!"}
                secondLine={"Not registered yet?"}
                linkName={"get-started"}
            />
            <ChooseUserLogin />
        </>
    );
}

export default LoginPage;
