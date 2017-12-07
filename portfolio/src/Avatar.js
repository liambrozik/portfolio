import React, { Component } from 'react';

class Avatar extends Component {
  render() {
    return (
      <img src={require('./avatar.png')} height={this.props.size} width={this.props.size} alt="Liam Brozik" className="Avatar" style={{
          borderRadius: "50%",
          marginLeft: this.props.marginLeft,
          marginTop: this.props.marginTop,
          float: this.props.float,
          transition: 'margin-left 1s, margin-top 1s, float 1s, position 1s, height 1s, width 1s'

      }} />

    );
  }
}

export default Avatar;
