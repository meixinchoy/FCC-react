import React from "react";
import { Link, withRouter } from "react-router-dom";

const textAreaStyles = {
    width: 235,
    margin: 5
};

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        // Change code below this line
        this.state = {
            toDoList: [], userInput: ""

        }
        // Change code above this line
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit() {
        const itemsArray = this.state.userInput.split(',');
        this.setState({
            toDoList: itemsArray
        });
    }
    handleChange(e) {
        this.setState({
            userInput: e.target.value
        });
    }
    render() {
        const items = this.state.toDoList.filter(i=> i.trim()!="").map(i => <li>{i}</li>) // Change this line
        return (
            <div>
                <textarea
                    onChange={this.handleChange}
                    value={this.state.userInput}
                    style={textAreaStyles}
                    placeholder='Separate Items With Commas'
                />
                <br />
                <button onClick={this.handleSubmit}>Create List</button>
                <h1>My "To Do" List:</h1>
                <ul>{items}</ul>
                <br /><br />
                <Link to="/"><button>Nav</button></Link>
            </div>
        );
    }
}

export default withRouter(ToDoList);