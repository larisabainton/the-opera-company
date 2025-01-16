import React from "react";
import LandingSection from "./LandingSection";

const Home = () => {
    return (
        <div className="HomePage">
            <LandingSection />
            <div className="what section section-1">
                <div className="section-title">What</div>
                <div className="section-description">Die Fledermaus is an opera</div>
            </div>
            <div className="gradient gradient-1"></div>
            <div className="immersive section section-2">
                <div className="section-title">You're Invited to the Ball</div>
            </div>
            <div className="gradient gradient-2"></div>
            <div className="when-where section section-3">
                <div className="section-title">When & Where</div>
                <div className="section-description">
                    <p>March 1st at 7pm <br></br>March 2nd at 3pm</p>
                    <p>MASARY Studios <br></br>15 Channel Center St #105<br></br> Boston, MA</p>
                </div>
            </div>
            <div className="gradient gradient-3"></div>
            <div className="who section section-4">
                <div className="section-title">Who</div>
                <div className="section-subtitle">Our cast for Die Fledermaus</div>
            </div>
            <div className="gradient gradient-4"></div>
            <div className="why section section-5">
                <div className="section-title">Why</div>
            </div>
            <div className="gradient gradient-5"></div>
            <div className="questions section section-6">
                <div className="section-title">I Have More Questions</div>
            </div>
        </div>
    )
};

export default Home;