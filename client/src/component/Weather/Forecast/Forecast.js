import React from "react"
import ForecastDataDay from "./ForecastDataDay";

function Forecast(props) {
    const arr = props.data.forecastday.map(((e,i)=>{
        return <ForecastDataDay key={i} data={e} index={i}/>
    }))
    return (
        <div className="accordion fw-bolder" id="accordionForecast" style={{opacity:"0.8"}}>
            {arr}
        </div>
    );
};

export default Forecast;