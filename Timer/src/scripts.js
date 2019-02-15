import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';

class App extends React.Component {
    render() {
        return React.createElement(
            "div",
            null,
            React.createElement(Content, null)
        );
    }
}
class Content extends React.Component {
    render() {
        return React.createElement(
            "div",
            null,
            "Content goes here"
        );
    }
}

ReactDOM.render(React.createElement(App, null), document.getElementById('menu'));
