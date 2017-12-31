import React, { Component } from 'react';
import './Avatar.css';

class Avatar extends Component {
  render() {
    return (
      <img 
      src="https://i.imgur.com/2C9b1l0.png"
      height={'125'} 
      width={'125'} 
      alt="Liam Brozik" 
      className={"Avatar "+ this.props.VIEW}/>

    );
  }
}

export default Avatar;
