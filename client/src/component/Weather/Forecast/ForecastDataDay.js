import React from "react"
import ForecastCard from "./ForecastCard";

function ForecastDataDay(props) {
    return (
        <div className="accordion-item" >
            <h2 className="accordion-header" >
                <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target={`#${props.data.date}`} aria-controls="collapseOne" style={{zIndex: 0}}>
                    <h3>{props.data.date}</h3>
                </button>
            </h2>
            <div id={props.data.date} className={`accordion-collapse collapse `} data-bs-parent="#accordionForecast">
                <div className="accordion-body">
                    <ForecastCard data={props.data}/>
                </div>
            </div>
        </div>

    );
};

export default ForecastDataDay;