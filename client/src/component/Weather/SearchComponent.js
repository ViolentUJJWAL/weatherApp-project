import React from "react"

function Search(props) {
    return (
        <div className="containar row m-3" >
            <div className="col-12 col-md-5 mt-3">
                <label htmlFor="FormControlInput1" className=" fw-bolder form-label">City</label>
                <input onChange={props.handler.changehandler} type="text" className="form-control" placeholder="City" value={props.value.name} name="name" />
            </div>
            <div className="col-12 col-md-6 mt-3">
                <label htmlFor="" className=" fw-bolder form-label">latitude & longitude</label>
                <div className="input-group">
                    <span className="input-group-text"><i className="bi bi-geo-alt" onClick={props.handler.autoSearchHandler}></i></span>
                    <input onChange={props.handler.changehandler} type="number" className="form-control ms-1" name="lat" placeholder="latitude" value={props.value.lat} />
                    <input onChange={props.handler.changehandler} type="number" className="form-control ms-1" name="lon" placeholder="longitude" value={props.value.lon} />
                </div>
            </div>
            <div className="col-12 col-md-1 text-center mt-5">
                <button onClick={props.handler.searchHandler} type="submit" className="btn btn-primary">
                    <i className="bi bi-search"></i>
                </button>
            </div>
            <hr className=" text-white my-3" />
        </div>
    );
};

export default Search;