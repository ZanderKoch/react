import React from "react";
import reactDom from "react-dom";
import ReactDOM from "react-dom";
import "./style.scss";

function Headline(props){
    return <h1>{props.title}</h1>;
}

function Button(props){
    return <button>{props.message}</button>;
}

function Box(props){
    return <div>
        <h1>{props.title}</h1>
        {props.message}
    </div>;
}

function ListItem(props){
    return <li>
        <label>
            {props.title}
            <input type="checkbox" defaultChecked={props.done}/>
        </label>
    </li>;
}

function List(props){
    return <div>
        <h1>{props.title}</h1>
        <ul>
            {props.children}
        </ul>
    </div>;
}

ReactDOM.render(<Headline title="hello world"/>,
document.getElementById("root"));

ReactDOM.render(<Button message="press me"/>,
document.getElementById("root"));

ReactDOM.render(<List title="A list">
                    <ListItem title="first Listitem" done={true}/>
                    <ListItem title="second Listitem" done={false}/>
                </List>,
                document.getElementById("root"));