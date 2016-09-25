import React from 'react';

var UserInput =  React.createClass({
    handleChange: function (e) {
        var i = e.target.value;
        this.props.onChange(i);
    },
    
    render: function () {
        return (   
                <input type="text" onChange={this.handleChange} />
        )
    }
});

export default UserInput;