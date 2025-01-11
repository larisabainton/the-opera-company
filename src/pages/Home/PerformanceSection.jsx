import React from "react";
// import PerformanceCarousel from "../../components/PerformanceCarousel";

const PerformanceSection = ({ performanceData }) => {
    return (
        <div className="PerformanceSection page-section">
            {/* <div className="section-title">
                Upcoming Performances
            </div>
            {performanceData && performanceData.length 
                ? <PerformanceCarousel performanceData={performanceData}/>
                : "Coming soon!"} */}
            <div className="section-1">
                <div className="section-title">Coming Up</div>
                <div className="section-subtitle">Die Fledermaus</div>
            </div>
            <div className="section-2">
                <div className="section-description">
                    <p>More info coming soon</p>
                    <p>Saturday Mar 1, 7pm</p>
                    <p>Sunday Mar 2, 3pm</p>
                    <p>Midway Artist Studios, 15 Channel Center St, Boston MA</p>
                </div>
            </div>
        </div>
    )
};

export default PerformanceSection;