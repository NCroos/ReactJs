import React from 'react'
import ReactDOM from 'react-dom'
class Button extends React.Component {
    startTimer(event) {
        //onClick={()=>{this.props.startTimer(this.props.time)}}>
        //onClick = {this.props.startTimer.bind(null, this.props.time)}
      return this.props.startTimer(this.props.time)
    }
    render() {
      return <button
        type="button"
        className='btn-primary btn'
        onClick={()=>{this.props.startTimer(this.props.time)}}>
        {this.props.time} seconds
      </button>
    }
  }

export default Button