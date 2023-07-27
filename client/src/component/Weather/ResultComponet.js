import React from "react"
import MoreResult from "./MoreResult";
import Forecast from "./Forecast/Forecast";

function Result(props) {
    const style = {
        margin: "auto",
    }

    const cardStyle = {
        margin: "auto",
        backgroundImage: `Url(${(!props.data.current.is_day) ? "https://get.pxhere.com/photo/sea-outdoor-horizon-light-cloud-sky-sun-fog-sunrise-sunset-night-sunlight-morning-dawn-pier-dark-dusk-evening-reflection-weather-street-light-lighting-publicdomain-nighttime-background-gradient-streetlamp-streetlights-atmospheric-phenomenon-atmosphere-of-earth-103109.jpg" : "https://mcdn.wallpapersafari.com/medium/1/89/QOiHx5.jpg"})`,
        color: `${(!props.data.current.is_day) ? "white" : "black"}`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "100% 100%"
    }

    return (
        <div id="result" className="container row" style={style}>
            <div id="mainResult" className="col-12 card border border-3 border-dark" style={cardStyle}>
                <div className="row">
                    <div className="col-8">
                        <h1>{props.data.location.name}</h1>
                        <h5>{props.data.location.region}</h5>
                        <h5>{props.data.location.country}</h5>
                        <div className="ms-3 fw-bold">
                            {props.data.location.localtime}
                        </div>
                    </div>
                    <div className="col-3 mt-3">
                        <h1>{props.data.current.temp_c}&deg; C</h1>
                        <div className="row">
                            <div className="col-3">
                                <img src={props.data.current.condition.icon} alt="weather" />
                            </div>
                            <div className="col-8" style={{
                                margin: "auto",
                                marginLeft: "0px"
                            }}>
                                <h5>{props.data.current.condition.text}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-1">
                        <h1>
                            <i onClick={props.handler} className={`bi ${(props.is_bookmark)? 'bi-bookmark-check-fill':'bi-bookmark-plus-fill'}`}></i>
                        </h1>
                    </div>
                    <div className="col-12" style={{zIndex: "0"}}>
                        <MoreResult moreData={props.data.current} />
                    </div>
                </div>
            </div>
            <div className="col-12 card mt-2 mb-5 p-5 border border-3 border-dark" style={cardStyle}>
                <h1 style={{color: `${(!props.data.current.is_day) ? "white" : "black"}`}}>
                    Forecast 7days
                </h1>
                <Forecast id={"a"} data={props.data.forecast}/>
            </div>
        </div>
    );
};

export default Result;