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
        top: '75px',
        height: '85vh',
        overflow: 'scroll',
        marginLeft: '50vw',
        padding: '0px 10px 60px 10px',
        borderRadius: '20px',
        transform: 'translateX(-30vw)',
        transition: 'padding-left 1500ms, top 1500ms, margin-left 1500ms, color 1500ms'
      }}>
        <Content VIEW={this.props.VIEW}/>
        <Content VIEW={this.props.VIEW}/>
        <Content VIEW={this.props.VIEW}/>
      </div>
    );
  }
}

export default ContentZone;
