import React from 'react';

var DisplayText = React.createClass({
    
    render: function () {
        return (
            <h2>{this.props.text}</h2>
        )
    }
});

export default DisplayText;