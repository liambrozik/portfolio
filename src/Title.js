import React, { Component } from 'react';

class Title extends Component {
  render() {
    return (
      <div className="Title" style={{
          color: this.props.color,
          fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
          fontSize: '30px',
          height: '0px',
          fontWeight: '700',
          textAlign: 'center',
          marginLeft: (100 - this.props.width)/2 + '%',
          marginTop: this.props.marginTop,
          width: this.props.width + '%',
          paddingTop: '20px',
          borderTop: '2px solid rgb(200, 200, 200)',
          opacity: this.props.opacity,
          transition: 'margin-top 1s, margin-left 1s, width 1s, color 1s, opacity 500ms'
      }}>
        <p style={{
            color: this.props.color,
            marginTop: '-40px', 
            backgroundColor: this.props.bgcolor, 
            width: this.props.pwidth, 
            marginLeft: '50%', 
            transform: 'translateX(-'+ parseInt(this.props.pwidth, 10)/2 +'px)',
            transition: 'width 1s, transform 1s, background-color 1s, color'
            }}>
        {this.props.text}
        </p>
      </div>
    );
  }
}

export default Title;
