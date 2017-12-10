import React, { Component } from 'react';

class Content extends Component {
  render() {
    return (
      <div className="Content" style={{
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        textAlign: 'left',
        fontSize: '20px',
        width: '90%',
        height: '500px',
        position: 'relative',
        marginLeft: '50%',
        padding: '20px',
        borderRadius: '20px',
        marginTop: "40px",

        transform: this.props.VIEW === "HOME" ? "translate(-50%, 100vh)" : 'translate(-50%, 0)',
        
        willChange: 'transform',
        transition: 'transform 1000ms'
      }}>

        <h1>Heyo</h1>
        <p>whats up</p>

      </div>
    );
  }
}

export default Content;
