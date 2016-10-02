import React from 'react';
import '../style/user-input.scss'

var UserInput =  React.createClass({
    handleChange: function (e) {
        var i = e.target.value;
        this.props.onChange(i);
    },
    
    render: function () {
        var focus = true;
        
        return (   
                <input type="text" onChange={this.handleChange} autoFocus={focus} />
        )
    }
});

export default UserInput;