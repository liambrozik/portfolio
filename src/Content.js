import React, { Component } from 'react';
import './Content.css';

class Content extends Component {
  render() {
    return (
      <div className={"Content " + this.props.VIEW}>

        <h1>{this.props.title}</h1> 
        <img src={this.props.gif} />
        <p>{this.props.description}</p>
        <i onClick={() => this.handleGitHub()} class="fa fa-github-square" aria-hidden="true"></i><p onClick={() => this.handleLink()} className="outlink">{this.props.linktext}</p>

      </div>
    );
  }

  handleGitHub() {
    var win = window.open(this.props.github, '_blank');
    win.focus();
  }

  handleLink() {
    var win = window.open(this.props.linkref, '_blank');
    win.focus();
  }
}

export default Content;
