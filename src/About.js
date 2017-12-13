import React, { Component } from 'react';
import './About.css';

class About extends Component {

  render() {
    return (
      this.props.VIEW === "HOME" ?
        <div className="About">
          <p>Seattle, WA</p>
          <p>University of Washington</p>
          <p>BS in Informatics</p>
          <p>Graduating June 2019</p>
        </div>
      : null
    );
  }
}

export default About;
