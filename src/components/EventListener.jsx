import React from "react";
import { Link, withRouter } from "react-router-dom";

class EventListener extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };
        this.handleEnter = this.handleEnter.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    // Change code below this line
    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyPress);
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyPress)
    }
    // Change code above this line
    handleEnter() {
        this.setState((state) => ({
            message: state.message + '\nYou pressed the enter key! '
        }));
    }
    handleKeyPress(event) {
        if (event.keyCode === 13) {
            this.handleEnter();
        }
    }
    // newLine(props){
    //     return props.text.split('\n').map(str=><h2>{str}</h2>); 
    // }<newLine text = {'str\niujesfd\nsj'} />
    render() {
        return (
            <div>
                <br />
                <Link to="/"><button>Nav</button></Link>
                <br />
                <h1>Press Enter Key</h1>
                <h2>{this.state.message}</h2>
            </div>
        );
    }
};

export default withRouter(EventListener);