import React from "react"
import Heading from "./Heading"
import Userform from "./Userform";
import Submit from "./Submit";
import "../../App.css";
function Home(){
    return <>
        <Heading />
        <div className="loginform">

        <Userform name="Username" place="eg:name@gmail.com"/>
        <Userform name="Password" place="Password"/>
        <Submit />
        </div>
    </>
}

export default Home;