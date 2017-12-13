import React, { Component } from 'react';
import './Avatar.css';

class Avatar extends Component {
  render() {
    return (
      <img 
      src={require('./avatar.png')} 
      height={this.props.VIEW === "HOME" ? '125' : '65'} 
      width={this.props.VIEW === "HOME" ? '125' : '65'} 
      alt="Liam Brozik" 
      className={"Avatar "+ this.props.VIEW}/>

    );
  }
}

export default Avatar;
