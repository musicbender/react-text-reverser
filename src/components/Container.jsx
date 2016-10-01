import React from 'react';
import DisplayText from './display-text.jsx';
import UserInput from './user-input.jsx';
import '../style/Container.scss';

var Container = React.createClass({
    getInitialState: function () {
        return {
            userInput: ''
        }
    },
    
    reverseText: function (text) {
        return text.split("").reverse().join('');
    },
    
    changeInput: function (newText) {
        this.setState({
            userInput: this.reverseText(newText)
        })
    },
    
    render: function () {
        return (
            <div className="container">
                <h1>Text Reverser</h1>
                <UserInput onChange={this.changeInput} />
                <DisplayText text={this.state.userInput} />
            </div>  
        )
    }
});

export default Container;


    



