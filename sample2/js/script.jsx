class HelloWorld extends React.Component{

     render() {
        return <div>
               <h1>Hello {this.props.name}</h1>
                This is the Babel link to refernce <a href={this.props.babellink} target="_blank">Babel Link </a>
                <h4>Test</h4>
           </div>
    }
}

ReactDOM.render(
    <HelloWorld name="Newman Croos" taskId="1" babellink ="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"/>,
    document.getElementById('content')
);
