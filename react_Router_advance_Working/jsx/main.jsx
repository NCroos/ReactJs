const React = require('react')
const Home = require('./home.jsx')
const About = require('./about.jsx')
const Contact = require('./contact.jsx')
let { NavLink, Switch, Route } = require('react-router-dom')

module.exports = function Main(props) {
    return <Switch>
        <Route exact path= '/' component = {Home}></Route>
        <Route exact path= '/about' component = {About}></Route>
        <Route exact path= '/contact' component = {Contact}></Route>
    </Switch>
}
