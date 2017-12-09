import React, { Component } from 'react';
import Content from './Content.js';

class ContentZone extends Component {
  render() {
    return (
      <div className="ContentZone" style={{
          backgroundColor: 'rgba(0, 0, 0, 0.0)',
          textAlign: 'left',
          fontSize: '64px',
          width: '60vw',
          position: 'absolute',
          top: '50px',
          height: '85vh',
          overflow: 'scroll',
          marginLeft: '50vw',
          padding: '0px 10px 60px 10px',
          borderRadius: '20px',
          transform: 'translateX(-30vw)',
          transition: 'padding-left 1s, top 1s, margin-left 1s, color 1s'
      }}>
        <Content top={this.props.top}/>
        <Content top={this.props.top}/>
        <Content top={this.props.top}/>
      </div>
    );
  }
}

export default ContentZone;
