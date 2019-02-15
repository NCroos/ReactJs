const React = require('react')
const ReactDOM = require ('react-dom')
const { BrowserRouter } = require('react-router-dom')
const App = require('./app.jsx')

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>),
    document.getElementById('content'));