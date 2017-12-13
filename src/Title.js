import React, { Component } from 'react';
import './Title.css';

class Title extends Component {
  render() {
    return (
      <div className={"Title " + this.props.VIEW} >
        <p className={"TitleContent " + this.props.VIEW + " " + this.props.scheme}>
          {this.props.text}
        </p>
      </div>
    );
  }
}

export default Title;
