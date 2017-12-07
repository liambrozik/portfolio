import React, { Component } from 'react';

class NavlistItem extends Component {
  render() {
    return (
      <div 
      onMouseOver={() => this.onHover(true)}
      onMouseOut={() => this.onHover(false)}
      className="NavlistItem" 
      style={{
          color: this.props.current ? 'rgb(255, 67, 0)': 'rgb(48, 48, 48)',
          borderBottom: this.props.current ? '3px solid rgba(0, 79, 122, 0.3)': 'none',
          fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
          fontSize: '20px',
          fontWeight: '700',
          textAlign: 'left',
          width: '150px',
          paddingTop: '50px',
          paddingBottom: '5px',
          paddingRight: "-20px",
          marginLeft: "10px",
          cursor: 'pointer',
          transition: 'padding-left 1s, font-size 1s, margin-left 1s, color 1s'
      }}>
        {this.props.text}
      </div>
    );
  }

  onHover(e) {
    if (e) {
        this.setState({
            bg: 'rgba(250, 67, 0, 0.1)'
        });
    } else {
        this.setState({
            bg: 'rgba(240, 67, 0, 0.0)'
        });
    }
  }

}

export default NavlistItem;
