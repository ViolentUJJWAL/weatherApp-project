import React from "react"
import {Link} from "react-router-dom"

function Card(props) {
    return (
        <div className="card m-3 mt-5 col-10 col-md-3">
            <div className="card-body">
                <h5 className="card-title">{props.data.city}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">{props.data.lat} , {props.data.lon}</h6>
                <h6 className="card-subtitle mb-2 text-body-secondary">{props.data.time}</h6>
                <Link to="/weather" onClick={props.handler} className="card-link"><i className="bi bi-pin-map-fill"></i></Link>
                <button onClick={props.delHandler} className=" btn card-link"><i className="bi bi-trash3"></i></button>
            </div>
        </div>
    );
};

export default Card;