import React from 'react';
import { render } from 'react-dom';
import DisplayText from './components/display-text.jsx';
import UserInput from './components/user-input.jsx';

var Container = React.createClass({
    getInitialState: function () {
        return {
            userInput: ''
        }
    },
    
    changeInput: function (newText) {
        this.setState({
            userInput: newText
        })
    },
    
    render: function () {
        return (
            <div>
                <h1>Text Reverser</h1>
                <UserInput onChange={this.changeInput} />
                <DisplayText text={this.state.userInput} />
            </div>  
        )
    }
});

render(<Container />, document.getElementById('app'));
    



