import React from "react";
import { LogoBar } from "../components/logoBar/LogoBar";
import GreetingHeaderNotLoggedIn from "../components/greetingHeader/GreetingHeaderLoggedIn";
import LoginFormFreelancer from "../components/loginForm/LoginFormFreelancer";

function LoginFreelancerPage() {
    return (
        <>
            <LogoBar />
            <GreetingHeaderNotLoggedIn
                headLine={"Welcome back!"}
                secondLine={"Not registered yet?"}
                linkName={"get-started"}
            />
            <LoginFormFreelancer />
        </>
    );
}

export default LoginFreelancerPage;
