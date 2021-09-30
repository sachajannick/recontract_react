import React from "react";
import NavBar from "../components/navBar/NavBar";
import WelcomeSection from "../components/welcomeSection/WelcomeSection";
import ContentSection from "../components/contentSection/ContentSection";

function HomePage() {
    return (
        <>
            <NavBar />
            <WelcomeSection />
            <ContentSection />
        </>
    );
}

export default HomePage;
