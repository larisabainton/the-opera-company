import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import TicketsButton from "../../components/TicketsButton"
import BackgroundVideo from "../../assets/backgroundVideo.mp4";

const LandingSection = () => {
    return (
        <div className="LandingSection">
            <div className="LandingSection_background background">
                <video autoPlay loop muted playsInline className="background-video">
                    <source src={BackgroundVideo} type="video/mp4"/>
                </video> 
            </div>
            <div className="LandingSection_foreground foreground">
                <div className="foreground_hook">
                   <StaticImage src ="../../assets/Welcome.png" alt="Welcome to the opera" />
                </div>
                <TicketsButton />
            </div>
        </div>
    )
};

export default LandingSection;