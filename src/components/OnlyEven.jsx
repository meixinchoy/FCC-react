import React from "react";
import { Link, withRouter } from "react-router-dom";

class Selector extends React.Component {
    constructor(props) {
        super(props);
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('Should I update?');
        // Change code below this line
        if (nextProps.value % 2 == 0) {
            return true;
        }

        // Change code above this line
    }
    componentDidUpdate() {
        console.log('Component re-rendered.');
    }
    render() {
        return <h1>{this.props.value}</h1>;
    }
}

class OnlyEven extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
        this.addValue = this.addValue.bind(this);
    }
    addValue() {
        this.setState(state => ({
            value: state.value + 1
        }));
    }
    render() {
        return (
            <div>
                <button onClick={this.addValue}>Add</button>
                <Selector value={this.state.value} />
                <br />
                <Link to="/"><button>Nav</button></Link>
            </div>
        );
    }
}

export default withRouter(OnlyEven);