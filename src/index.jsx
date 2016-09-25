import React from 'react';
import { render } from 'react-dom';

var Container = React.createClass({
    getInitialState: function () {
        return {
            userInput: ''
        }
    },
    
    handleInputChange: function (e) {
        this.setState({
            userInput: e.target.value
        })
    },
    
    render: function () {
        return (
            <div>
                <h1>Text Reverser</h1>
                <input type="text" onChange={ this.handleInputChange } value={ this.state.userInput } />
                <h2 className="output">{ this.state.userInput }</h2>
            </div>  
        )
    }
});

render(<Container />, document.getElementById('app'));
    



