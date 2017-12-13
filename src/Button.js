import React, { Component } from 'react';
import './Button.css'

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bg: 'rgb(200, 200, 200)',
            fcol: 'rgb(37, 37, 37)',
            text: this.props.text
        };
    }

  render() {
    return (
      this.props.VIEW === "HOME" ? 
        <button 
        onClick={(e, info) => this.onClick(e, this.state.text)}
        className={"Button " + this.props.VIEW} >
            {this.props.text}
        </button>
      : null
    );
  }

  onClick(e, info) {
      e.preventDefault();
      this.props.onClick(info)
  }
}

export default Button;
