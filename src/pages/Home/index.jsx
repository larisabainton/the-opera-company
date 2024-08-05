import React from "react";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import FAQSection from "./FAQSection";
import LandingSection from "./LandingSection";
import PerformanceSection from "./PerformanceSection";


const Home = () => {
    return (
        <div className="homePage">
            <LandingSection />
            <PerformanceSection />
            <FAQSection />
            <AboutSection />
            <ContactSection />
        </div>
    )
};

export default Home;