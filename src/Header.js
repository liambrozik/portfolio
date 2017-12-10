import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="Header" style={{
        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
        fontWeight: '700',
        textAlign: 'left',
        width: '100%',
        paddingTop: '5px',
        fontSize: '48px', // : '24px',
        marginTop: '0px', // : '-55px',
        paddingLeft: '40px', // : '5vw',

        color: this.props.color,
        
        willChange: 'opacity',
        transition: 'opacity: 200ms, padding-left 1s, font-size 1s, margin-top 1s, color 1s'
      }}>
        {this.props.text}
      </div>
    );
  }
}

export default Header;
