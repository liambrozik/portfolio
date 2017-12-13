import React, { Component } from 'react';
import NavlistItem from './NavlistItem'
import './Navlist.css'

class Navlist extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.mode);
    }
  render() {
    return (
      <div className={"Navlist " + this.props.VIEW}>
        {this.props.text}

      <NavlistItem 
        text={this.props.mode === "Web Development" ? "Projects" : "Solo"} 
        current={this.props.current === "1" ? true : false}
      />
      <NavlistItem 
        text={this.props.mode === "Web Development" ? "Code Samples" : "Editing"}  
        current={this.props.current === "2" ? true : false}
      />
      {
      this.props.mode === "Web Development" ? 
        <NavlistItem 
          text="Education" 
          current={this.props.current === "3" ? true : false}
        /> 
      : null
      }
      </div>
    );
  }
}

export default Navlist;
