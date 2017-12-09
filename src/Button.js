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
      <button 
      onMouseOver={() => this.onHover(true)}
      onMouseOut={() => this.onHover(false)}
      onClick={(e, info) => this.onClick(e, this.state.text)}
      className="Button" 
      style={{
          color: this.state.fcol,
          backgroundColor: this.state.bg,
          fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
          fontSize: '18px',
          fontWeight: '300',
          textAlign: 'center',
          width: this.props.width + 'px',
          height: this.props.height + 'px',
          float: 'left',
          marginLeft: '50px',
          marginTop: '10px',
          cursor: 'pointer',
          borderRadius: '10px',
          transition: 'background-color 200ms, color 200ms, opacity 500ms',
          borderBottom: '2px solid rgb(170, 170, 170)',
          opacity: this.props.opacity
      }}>
      {this.props.text}
      </button>
    );
  }

  onHover(e) {
    if (e) {
        this.setState({
            bg: 'rgb(215, 215, 215)'
        });
    } else {
        this.setState({
            bg: 'rgb(200, 200, 200)'
        });
    }
  }

  onClick(e, info) {
      e.preventDefault();
      this.props.onClick(info)
  }
}

export default Button;
