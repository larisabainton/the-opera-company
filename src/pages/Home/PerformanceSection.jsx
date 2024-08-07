import React from "react";
import PerformanceCarousel from "../../components/PerformanceCarousel";

const PerformanceSection = ({ performanceData }) => {
    return (
        <div className="PerformanceSection page-section">
            <div className="section-title">
                Upcoming Performances
            </div>
            {performanceData && performanceData.length 
                ? <PerformanceCarousel performanceData={performanceData}/>
                : "Coming soon!"}
        </div>
    )
};

export default PerformanceSection;