import React, { Component } from 'react';
import './About.css';

class About extends Component {

  render() {
    return (
        <div className="About">
          <h1>Liam Brozik</h1>
          <p><i className="fa fa-map-marker" aria-hidden="true"></i> Seattle, WA</p>
          <p><i className="fa fa-book" aria-hidden="true"></i> University of Washington</p>
          <p><i className="fa fa-flask" aria-hidden="true"></i> BS in Informatics</p>
          <p><i className="fa fa-graduation-cap" aria-hidden="true"></i> Graduating June 2019</p>
        </div>
    );
  }
}

export default About;
