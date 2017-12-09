import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="Header" style={{
          color: this.props.color,
          fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
          fontSize: this.props.fontSize,
          fontWeight: '700',
          textAlign: 'left',
          width: '100%',
          marginTop: this.props.marginTop,
          paddingLeft: this.props.paddingLeft,
          paddingTop: '5px',
          transition: 'padding-left 1s, font-size 1s, margin-top 1s, color 1s'
      }}>
        {this.props.text}
      </div>
    );
  }
}

export default Header;
