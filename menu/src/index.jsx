import React from 'react'
import ReactDOM from 'react-dom'
class Menu extends React.Component{
    render() {
        let menus = ['Home',
          'About',
          'Services',
          'Portfolio',
          'Contact us']
        return(
                <div>
                    {menus.map((v,i) =>{
                        return <div key={i}><Link lable={v} /></div>
                    })}
                </div>
        )
    }
}

class Link extends React.Component{
    render(){
        const url = '/' + this.props.lable
            .toLowerCase()
            .trim()
            .replace(' ', '-')

        return(
            <div>
                <a href={url}>{this.props.lable}</a>
            </div>
        )
    }
}
ReactDOM.render(<Menu />, document.getElementById('menu'))