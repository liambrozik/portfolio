import React, { Component } from 'react';
import './NavlistItem.css'

class NavlistItem extends Component {
  render() {
    return (
      <div 
        onClick={(info) => this.handleClick(this.props.text)}
        className={"NavlistItem " + this.props.context + " " +this.props.current} 
      >
        {this.props.text}
      </div>
    );
  }

  handleClick(info) {
    this.props.onClick(info);
  }

}

export default NavlistItem;
