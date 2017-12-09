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
          marginTop: this.props.top,
          transform: 'translateX(-50%)',
          transition: 'padding-left 1s, font-size 1s, margin-top 1s, color 1s'
      }}>

        <h1>Heyo</h1>
        <p>whats up</p>

      </div>
    );
  }
}

export default Content;
