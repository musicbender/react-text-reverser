import React from 'react';
import { render } from 'react-dom';
import Container from './components/Container.jsx';

var App = React.createClass({
    render: function () {
        return (
            <div>
                <Container />
            </div>   
        )
    }
});

render(<App />, document.getElementById('app'));