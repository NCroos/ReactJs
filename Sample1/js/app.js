class HelloWorld extends React.Component{

     render() {
        /* let msg = "";
        if(this.props.taskId == "1")
        {
            msg = 'You Enter Task Id :' + this.props.taskId;
        }
        else
        {
            msg = "You didn't Enter Task Id";
        }*/

        let msg1 = (id) =>
        {
            if(id == "1")
            {
                return 'You Enter Task Id :' + id;
            }
            else
            {
                return "You didn't Enter Task Id";
            }
        }
        return <div>
               <h1>Hello {this.props.name}</h1>
                <h4>{msg1(this.props.taskId)}</h4>
                This is the Babel link to refernce <a href={this.props.babellink} target="_blank">Babel Link </a>
           </div>
    }
}

ReactDOM.render(
    <HelloWorld name="Newman Croos" taskId="1" babellink ="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"/>,
    document.getElementById('content')
);
