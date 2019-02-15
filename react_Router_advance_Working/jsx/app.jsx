const React = require('react')
const Navigation = require('./navigation.jsx')
const Main = require('./main.jsx')

module.exports = function App(props) {
  return <div className = 'app'>
    <h1> React Router Demo </h1>
    <Navigation />
    <Main />
  </div>
}
