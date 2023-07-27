import React from "react"
import Search from "./SearchComponent";
import Result from "./ResultComponet";
import PlaceholderResult from "./LoadingPleacHolder";
import Bookmark from "../UserComponent/Bookmark";

function Weather(props) {
    return (
        <div >
            <Search value={props.formData} handler={props.handler} />
            {(props.data===null)?
                (props.formData.email)?
                <Bookmark data={props.formData.bookmark} deleteHandler={props.deleteHandler} handler={props.seraching}/>:
                <div className="text-white m-5"><h1>Search first pleace</h1></div>
                :(props.data==="loading")?
                <PlaceholderResult/>
                :
                <Result data={props.data} is_bookmark={props.formData.is_bookmark} handler={props.handler.bookmarkHandler} />
            }
        </div>
    );
};

export default Weather;