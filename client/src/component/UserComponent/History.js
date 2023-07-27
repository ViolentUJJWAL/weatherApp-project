import React from "react"
import Card from "./Card";

function History(props) {
    const arr = props.data.map((e,i)=>{
        return <Card data={e} key={i} handler={()=>{props.handler(e.lat, e.lon)}}
        delHandler={()=>{
            props.deleteHandler(e._id, 'history', i)
        }}/>
    })
    return (
        <div id="result" className="container row" style={{margin: "auto"}}>
            {(arr.length>0)?arr.reverse():<h1>No History</h1>}
        </div>
    );
};

export default History;