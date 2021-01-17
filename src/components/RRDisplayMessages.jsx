import React from 'react'
//import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'
// import { createStore, combineReducers, applyMiddleware } from 'redux'
//import thunk from 'redux-thunk'

// const store = createStore(
//   rootReducer,
//   applyMiddleware(thunk)
// // );

// ReactDOM.render(
//   <Provider store={store}>
//     <App/>
//   </Provider>,
//   document.getElementById('root')
// );


// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
    return {
        type: ADD,
        message: message
    }
};

const mapStateToProps = (state) => {
    return {
        messages: state
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        submitNewMessage: (message) => {
            dispatch(addMessage(message));
        }
    }
};

const messageReducer = (state = [], action) => {
    switch (action.type) {
        case ADD:
            return [
                ...state,
                action.message
            ];
        default:
            return state;
    }
};



const store = createStore(messageReducer);

// React:

class DisplayMessages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            //messages: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitMessage = this.submitMessage.bind(this);
    }
    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }
    submitMessage() {
        this.props.submitNewMessage(this.state.input);
        this.setState((state) => {
            //const currentMessage = state.input;
            return {
                input: '',
                //messages: state.messages.concat(currentMessage)
            };
        });
    }
    render() {
        return (
            <div>
                <h2>Type in a new Message:</h2>
                <input
                    value={this.state.input}
                    onChange={this.handleChange} /><br />
                <button onClick={this.submitMessage}>Submit</button>
                <ul>
                    {/* {this.state.messages.map((message, idx) => { */}
                    {this.props.messages.map((message, idx) => {
                        return (
                            <li key={idx}>{message}</li>
                        )
                    })
                    }
                </ul>
            </div>
        );
    }
};

//const Provider = ReactRedux.Provider;
//const connect = ReactRedux.connect;

const Container = connect(mapStateToProps, mapDispatchToProps)(DisplayMessages)


class AppWrapper extends React.Component {
    // Render the Provider below this line
    render() {
        return (
            <Provider store={store}>
                <Container />
            </Provider>
        )
    }

    // Change code above this line
};

export default AppWrapper;