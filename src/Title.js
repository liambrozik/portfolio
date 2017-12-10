import React, { Component } from 'react';

class Title extends Component {
  render() {
    return (
      <div className="Title" style={{
        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
        fontSize: '30px',
        height: '0px',
        fontWeight: '700',
        textAlign: 'center',
        paddingTop: '20px',
        borderTop: '2px solid rgb(200, 200, 200)',

        color: this.props.color,
        marginLeft: this.props.VIEW === "HOME" ? (100 - 75)/2 + "%" : (100 - 50)/2 + "%",
        marginTop: this.props.VIEW === "HOME" ? "40px" : "-13px",
        width: this.props.VIEW === "HOME" ? "75%" : "50%",
        opacity: this.props.VIEW === "HOME" ? "1" : "1",

        willChange: 'margin-top, margin-left, width, color, opacity',
        transition: 'margin-top 1s, margin-left 1s, width 1s, color 1s, opacity 500ms'
      }}>
        <p style={{
          marginTop: '-40px', 
          marginLeft: '50%', 
          
          color: this.props.color,
          backgroundColor: this.props.bgcolor, 
          width: this.props.VIEW === "HOME" ? "150px" : "350px", 
          transform: 'translateX(-' + (this.props.VIEW === "HOME" ? 150 : 350)/2 + 'px)',

          willChange: 'transform, width, color, background-color',
          transition: 'width 1s, transform 1s, background-color 1s, color 1s'
        }}>
          {this.props.text}
        </p>
      </div>
    );
  }
}

export default Title;
