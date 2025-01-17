import React from "react";
import TicketsButton from "../../components/TicketsButton"
import { StaticImage } from "gatsby-plugin-image";

const LandingSection = () => {
    return (
        <div className="LandingSection">
            <div className="LandingSection_background background">
                <StaticImage src="./../../assets/background-image.png" alt="Fledermaus poster" />
            </div>
            <div className="LandingSection_foreground foreground">
                <div className="foreground_hook">
                   <div className="title">Die Fledermaus</div>
                </div>
                <TicketsButton />
            </div>
        </div>
    )
};

export default LandingSection;