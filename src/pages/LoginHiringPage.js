import React from "react";
import { LogoBar } from "../components/logoBar/LogoBar";
import GreetingHeaderNotLoggedIn from "../components/greetingHeader/GreetingHeaderLoggedIn";
import LoginFormHiring from "../components/loginForm/LoginFormHiring";

function LoginHiringPage() {
    return (
        <>
            <LogoBar />
            <GreetingHeaderNotLoggedIn
                headLine={"Welcome back!"}
                secondLine={"Not registered yet?"}
                linkName={"get-started"}
            />
            <LoginFormHiring />
        </>
    );
}

export default LoginHiringPage;
