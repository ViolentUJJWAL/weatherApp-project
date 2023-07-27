import React from "react"

function ForecastDataHour(props) {
    // const time = new Date(props.data.time_epoch * 1000)
    const epochToDateTime = (ep) => {
        let t = new Intl.DateTimeFormat("en-US", {
            hour: "2-digit",
            minute: "2-digit"
        }).format(ep * 1000)
        return t.toString()
    }
    return (
        <div className="col-12 col-lg-2 col-sm-4 mt-4">
            <button type="button" className="btn btn-primary">
                <img src={props.data.condition.icon} alt="weather" /><span className="fw-bolder">{props.data.temp_c}</span>
                <h5>{props.data.condition.text}</h5>
                {epochToDateTime(props.data.time_epoch)}
            </button>

        </div>
    );
};

export default ForecastDataHour;