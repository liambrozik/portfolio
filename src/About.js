import React, { Component } from 'react';
import './About.css';

class About extends Component {

  render() {
    return (
        <div className="About">
          <h1>Liam Brozik</h1>
          <p><a href="https://goo.gl/maps/CT3JBxmj2iB2"><i className="fa fa-map-marker" aria-hidden="true"></i> Seattle, WA</a></p>
          <p><a href="http://www.washington.edu/"><i className="fa fa-book" aria-hidden="true"></i> University of Washington</a></p>
          <p><a href="https://ischool.uw.edu/programs/informatics"><i className="fa fa-flask" aria-hidden="true"></i> BS in Informatics</a></p>
          <p><a href="https://www.timeanddate.com/calendar/monthly.html?year=2019&month=6&country=1"><i className="fa fa-graduation-cap" aria-hidden="true"></i> Graduating June 2019</a></p>
        </div>
    );
  }
}

export default About;
