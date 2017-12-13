import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div 
      className={"Header " + this.props.VIEW + " " + this.props.scheme} >
        {this.props.text}
      </div>
    );
  }
}

export default Header;
