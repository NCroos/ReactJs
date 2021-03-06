import React from 'react';
import ReactDOM from 'react-dom';
class Menu extends React.Component {
    render() {
        let menus = ['Home', 'About', 'Services', 'Portfolio', 'Contact us'];
        return React.createElement(
            'div',
            null,
            menus.map((v, i) => {
                return React.createElement(
                    'div',
                    { key: i },
                    React.createElement(Link, { lable: v })
                );
            })
        );
    }
}

class Link extends React.Component {
    render() {
        const url = '/' + this.props.lable.toLowerCase().trim().replace(' ', '-');

        return React.createElement(
            'div',
            null,
            React.createElement(
                'a',
                { href: url },
                this.props.lable
            )
        );
    }
}
ReactDOM.render(React.createElement(Menu, null), document.getElementById('menu'));
