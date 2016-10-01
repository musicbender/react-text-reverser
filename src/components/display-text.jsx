import React from 'react';
import '../style/display-text.scss';

var DisplayText = React.createClass({
    
    render: function () {
        return (
            <h2>{this.props.text}</h2>
        )
    }
});

export default DisplayText;