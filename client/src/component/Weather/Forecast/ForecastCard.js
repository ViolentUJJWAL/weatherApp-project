import React from "react"
import ForecastDataHour from "./ForecastDatahour";

function ForecastCard(props) {
    const arr = props.data.hour.map((e, i) => {
        return <ForecastDataHour key={i} data={e} />
    })
    return (
        <div className="container row">
            <div className="col-6 fw-bolder" >
                <h1 className="ms-4">{props.data.day.avgtemp_c}&deg; C</h1>
                <p>Max Temp {props.data.day.maxtemp_c}&deg; C<br />
                    Min Temp {props.data.day.mintemp_c}&deg; C</p>
            </div>
            <div className="col-6 text-end">
                <div>
                    <img src={props.data.day.condition.icon} alt="weather" />
                    <h4>{props.data.day.condition.text}</h4>
                </div>
            </div>
            <div className="col-12">
                <div>
                    <h5>Sunrise: {props.data.astro.sunrise}</h5>
                    <h5>Sunset: {props.data.astro.sunset}</h5>
                    <h5>Moonrise: {props.data.astro.moonrise}</h5>
                    <h5>Moonset: {props.data.astro.moonset}</h5>
                    <h5>Moon Phase: {props.data.astro.moon_phase}</h5>
                    <h5>Moon Illumination: {props.data.astro.moon_illumination}%</h5>
                </div>
            </div>
            <div className="row col-12 mt-3 container" style={{
                height: "200px",
                overflow: "auto",
                zIndex: "1"
            }}>
                {arr}
            </div>
        </div >
    );
};

export default ForecastCard;