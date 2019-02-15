class HelloWorld extends React.Component {

    render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "h1",
                null,
                "Hello ",
                this.props.name
            ),
            "This is the Babel link to refernce ",
            React.createElement(
                "a",
                { href: this.props.babellink, target: "_blank" },
                "Babel Link "
            ),
            React.createElement(
                "h4",
                null,
                "Test"
            )
        );
    }
}

ReactDOM.render(React.createElement(HelloWorld, { name: "Newman Croos", taskId: "1", babellink: "https://unpkg.com/babel-standalone@6.15.0/babel.min.js" }), document.getElementById('content'));
