import React from "react";
import PerformanceCarousel from "../../components/PerformanceCarousel";

const PerformanceSection = ({ performanceData }) => {
    return (
        <div className="PerformanceSection">
            <div className="page-title">
                Upcoming Performances
            </div>
            {performanceData && performanceData.length 
                ? <PerformanceCarousel performanceData={performanceData}/>
                : "Coming soon!"}
        </div>
    )
};

export default PerformanceSection;