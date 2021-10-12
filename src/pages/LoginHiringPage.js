import React from "react";
import { LogoBar } from "../components/logoBar/LogoBar";
import GreetingHeader from "../components/greetingHeader/GreetingHeader";
import LoginFormHiring from "../components/loginForm/LoginFormHiring";

function LoginHiringPage() {
    return (
        <>
            <LogoBar />
            <GreetingHeader
                headLine={"Welcome back!"}
                secondLine={"Not registered yet?"}
                linkName={"get-started-hiring"}
            />
            <LoginFormHiring />
        </>
    );
}

export default LoginHiringPage;
