import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
    return (
        <div>
            <h1>React Exercises</h1>
            <ul>
                <li><Link to="/counter">React Counter</Link></li>
                <li><Link to="/controlledinput">React Controlled Input</Link></li>
                <li><Link to="/controlledforms">React Controlled Forms</Link></li>
                <li><Link to="/eventlistener">React Event Listener</Link></li>
                <li><Link to="/onlyeven">React Display Even Num</Link></li>
                <li><Link to="/magic8ball">React Magic Eight Ball</Link></li>
                <li><Link to="/todolist">React To Do List</Link></li>
            </ul>
            <h1>React and Redux</h1>
            <ul>
                <li><Link to="/displaymessages">DisplayMessages</Link></li>
            </ul>
        </div>
    )
}

export default withRouter(Navigation);