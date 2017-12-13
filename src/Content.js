import React, { Component } from 'react';
import './Content.css';

class Content extends Component {
  render() {
    return (
      <div className={"Content " + this.props.VIEW}>

        <h1>Heyo</h1>
        <p>whats up</p>

      </div>
    );
  }
}

export default Content;
