import React from "react";
import { LogoBar } from "../components/logoBar/LogoBar";
import GreetingHeader from "../components/greetingHeader/GreetingHeader";
import LoginFormFreelancer from "../components/loginForm/LoginFormFreelancer";

function LoginFreelancerPage() {
    return (
        <>
            <LogoBar />
            <GreetingHeader
                headLine={"Welcome back!"}
                secondLine={"Not registered yet?"}
                linkName={"get-started-freelancer"}
            />
            <LoginFormFreelancer />
        </>
    );
}

export default LoginFreelancerPage;
