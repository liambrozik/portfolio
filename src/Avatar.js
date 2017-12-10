import React, { Component } from 'react';

class Avatar extends Component {
  render() {
    return (
      <img 
      src={require('./avatar.png')} 
      height={this.props.VIEW === "HOME" ? '125' : '65'} 
      width={this.props.VIEW === "HOME" ? '125' : '65'} 
      alt="Liam Brozik" 
      className="Avatar" 
      style={{
        borderRadius: "50%",
        marginLeft: '-310px', // '-95vw'
        marginTop: '30px', // '5px'

        opacity: this.props.VIEW === "HOME" ? "1" : "0",
        
        willChange: 'opacity',
        transition: 'margin-left 1000ms, margin-top 1000ms, height 1000ms, width 1000ms, opacity 200ms'
      }} />

    );
  }
}

export default Avatar;
