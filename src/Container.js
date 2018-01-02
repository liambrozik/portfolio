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
        <div className={"signal " + this.props.prog}>
          <h6>Projects</h6>
          <p id="arrow"><i className="fa fa-caret-down" aria-hidden="true"></i></p>
        </div>
      </div>
    );
    }
}

export default Container;
