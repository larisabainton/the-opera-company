import React from "react";
import TicketsButton from "../../components/TicketsButton"
import { StaticImage } from "gatsby-plugin-image";
// import BackgroundVideo from "../../assets/backgroundVideo.mp4";

const LandingSection = () => {
    return (
        <div className="LandingSection">
            <div className="LandingSection_background background">
                <StaticImage alt="" className="" src="../../assets/background.png" placeholder="none" />
                {/* <video autoPlay loop muted playsInline className="background-video">
                    <source src={BackgroundVideo} type="video/mp4"/>
                </video> */}
            </div>
            <div className="LandingSection_foreground foreground">
                <div className="foreground_hook">Welcome to the Opera</div>
                <TicketsButton />
            </div>
        </div>
    )
};

export default LandingSection;