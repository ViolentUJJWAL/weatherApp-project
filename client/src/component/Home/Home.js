import React from "react"
import "./Home.css"

function Home(props) {

    const style = {
        minHeight: `${100 - 11}vh`,
        // maxHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "calc(10px + 2vmin)",
        color: "white"
    }

    return (
        <div style={style}>
            <h1 className="textCutout text-center">
                VIOLENT UJJWAL
            </h1>
            <h1 style={{fontFamily:"cursive"}}>
                Weather App
            </h1>
            <div className="container text-center mt-5 row">
                <form onSubmit={props.hendler}>
                    <div className="col-12">
                    <input style={{width:"40%"}} className="inputTextBox border text-center rounded fw-bolder" type="email" name="email" placeholder="Enter your email" required/>
                    </div>
                    <button className="btn btn-primary mt-3 text-uppercase fw-bolder" type="submit">Get Start</button>
                </form>
            </div>
        </div>
    );
};

export default Home;