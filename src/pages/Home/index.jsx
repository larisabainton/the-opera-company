import React from "react";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import FAQSection from "./FAQSection";
import LandingSection from "./LandingSection";
import PerformanceSection from "./PerformanceSection";

const Home = () => {
    return (
        <div className="HomePage">
            <LandingSection />
            <div className="HomePage_info">
                <PerformanceSection />
                <FAQSection />
                <AboutSection />
                <ContactSection />
            </div>
        </div>
    )
};

export default Home;