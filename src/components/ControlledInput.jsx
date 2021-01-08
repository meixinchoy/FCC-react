import React from "react";
import { Link } from "react-router-dom";

class ControlledInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };
        // Change code below this line
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        // Change code above this line
    }
    // Change code below this line
    handleChange1(event) {
        this.setState({ input: event.target.value})
    }
    handleChange2(event) {
        this.setState({ inputValue: event.target.value })
    }
    // Change code above this line
    render() {
        return (
            <div>

                <br />
                <input value={this.state.input} onChange={this.handleChange1.bind(this)} />
                <h4>Controlled Input:</h4>
                <p>{this.state.input}</p>
                
                <br />
                <GetInput
                    input={this.state.inputValue}
                    handleChange={this.handleChange2} />
                <RenderInput
                    input={this.state.inputValue} />
                <br />
                <Link to="/"><button>Nav</button></Link>
            </div>
        );
    }
};

class GetInput extends React.Component {
    render() {
        return (
            <div>
                <h3>Get Input:</h3>
                <input
                    value={this.props.input}
                    onChange={this.props.handleChange} />
            </div>
        );
    }
};

class RenderInput extends React.Component {
    render() {
        return (
            <div>
                <h3>Input Render:</h3>
                <p>{this.props.input}</p>
            </div>
        );
    }
};

export default ControlledInput;