import React, { Component } from 'react';
import './Avatar.css';

class Avatar extends Component {
  render() {
    return (
      <img 
      src="https://i.imgur.com/2C9b1l0.png"
      height={this.props.VIEW === "HOME" ? '125' : '65'} 
      width={this.props.VIEW === "HOME" ? '125' : '65'} 
      alt="Liam Brozik" 
      className={"Avatar "+ this.props.VIEW}/>

    );
  }
}

export default Avatar;
