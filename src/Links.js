import React, { Component } from 'react';
import './Links.css';

class Links extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

  render() {
    return (
      <div className={"Links "}>
        <a href={this.props.deploy}><i className="fa fa-globe" aria-hidden="true"></i><span>Website</span></a>
        <a href={this.props.gh}><i className="fa fa-github" aria-hidden="true"></i><span>Github</span></a>
      </div>
    );
    }
}

export default Links;
