import React, { Component } from 'react';
import './Container.css';
import Avatar from './Avatar.js';
import About from './About.js';

class Container extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

  render() {
    return (
      <div className={"Container "}>
        <Avatar />
        <About />
      </div>
    );
    }
}

export default Container;
