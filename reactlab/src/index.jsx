import React from "react";
import ReactDOM from "react-dom";

function Headline(props){
    return <h1>{props.title}</h1>;
}

function Button(props){
    
}

ReactDOM.render(<Headline title="hello world"/>,
document.getElementById("root"));