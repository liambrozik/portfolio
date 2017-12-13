import React, { Component } from 'react';
import Content from './Content.js';
import './ContentZone.css'

class ContentZone extends Component {
  render() {
    return (
      <div className={"ContentZone " + this.props.VIEW}>
        <Content VIEW={this.props.VIEW}/>
        <Content VIEW={this.props.VIEW}/>
        <Content VIEW={this.props.VIEW}/>
      </div>
    );
  }
}

export default ContentZone;
