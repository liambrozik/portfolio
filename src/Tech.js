import React, { Component } from 'react';
import './Tech.css';

class Tech extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

  render() {
    return (
      <div className={"Tech " + this.props.text + " " + this.props.order}>
        <i className="fa fa-hashtag" aria-hidden="true"></i>
        {" " + this.props.text}
      </div>
    );
    }
}

export default Tech;
