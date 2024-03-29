import React from "react";
import { LogoBar } from "../components/logoBar/LogoBar";
import GreetingHeader from "../components/greetingHeader/GreetingHeader";
import ChooseUserLogin from "../components/chooseUser/ChooseUserLogin";

function LoginPage() {
    return (
        <>
            <LogoBar />
            <GreetingHeader
                headLine={"Welcome back!"}
                secondLine={"Not registered yet?"}
                linkName={"get-started"}
            />
            <ChooseUserLogin />
        </>
    );
}

export default LoginPage;
