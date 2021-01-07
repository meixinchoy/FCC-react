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
            </ul>
        </div>
    )
}

export default withRouter(Navigation);