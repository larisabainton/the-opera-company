import React from "react";
import TicketsButton from "../../components/TicketsButton"

const LandingSection = () => {
    return (
        <div className="LandingSection">
            <div className="LandingSection_background background"></div>
            <div className="LandingSection_foreground foreground">
                <div className="foreground_hook">Welcome to the Opera</div>
                <TicketsButton />
            </div>
        </div>
    )
};

export default LandingSection;