import React, { Component } from 'react';

class About extends Component {

  render() {
    return (
      this.props.VIEW === "HOME" ?
        <div className="About" style={{
            color: 'rgb(37, 37, 37)',
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            overflow: 'hidden',
            fontSize: '18px',
            fontWeight: '300',
            textAlign: 'left',
            width: '100%',
            paddingLeft: '60px',
            paddingTop: '0px',
            marginTop: '-10px',
            lineHeight: '8px',
            opacity: "1",
            transition: 'opacity 500ms, height 200ms'
        }}>
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
