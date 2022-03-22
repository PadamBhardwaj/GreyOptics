import React from "react";
import "../../App.css"
function Userform(props){
    return <>
    <div className="userform">
    <label>{props.name}</label>
    <br/>
        <input placeholder={props.place}/> 
        </div>
    </>
}
export default Userform;