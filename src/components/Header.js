import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mainSubtitle: 'Main Subtitle',
            subtitle: 'Subtitle Pertama Header',
            subtitle2: this.props.subtitle2,
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleMessage = (msg, e) => {
        e.preventDefault();
        alert(msg)
        alert(this.state.subtitle2)
    }

    handleClick() {
        // this.setState({
        //     subtitle: 'mosokkkkk'
        // })
        this.setState((state, props) => {
            return {
                subtitle: state.subtitle2,
                subtitle2: state.subtitle,
            }
        })
    }

    render() {
        return (
            <div>
                <h4>INI HEADER</h4>
                <p>{this.state.subtitle}</p>
                <a href="/" onClick={(e) => this.handleMessage('OKE BOS', e)}>{this.state.subtitle2}</a>
                <br />
                <button onClick={this.handleClick}>Switch</button>
            </div>
        )
    }
}
export default Header;