require ('../css/main.css')

const React = require('react')
const ReactDOM = require('react-dom')
const Router = require('./router.jsx')

const mapping = {
    '#accounts' : <div> Accounts (<a href="#">Home</a>)</div>,
    '#profile' : <div> Profile  (<a href="#">Home</a>)</div>,
    '*' : <div><u>Dashboard</u><br/>
           <a href="#profile">Profile</a> <br/>
           <a href ="#accounts">Accounts</a>
    </div>
}

ReactDOM.render(
    <Router mapping = {mapping} />,
    document.getElementById('content')
)