import React, { Component } from 'react';
import './Info.css';

class Info extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

  render() {
    return (
      <div className={"Info " + this.props.feat}>
        {this.props.text}
      </div>
    );
    }
}

export default Info;
