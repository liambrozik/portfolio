import React, { Component } from 'react';
import NavlistItem from './NavlistItem'

class Navlist extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.mode);
    }
  render() {
    return (
      <div className="Navlist" style={{
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          textAlign: 'left',
          width: '170px',
          marginTop: "15vh",
          marginLeft: this.props.limarginLeft,
          padding: '0px 10px 60px 10px',
          borderRadius: '20px',
          transition: 'padding-left 1s, font-size 1s, margin-left 1s, color 1s'
      }}>
        {this.props.text}

      <NavlistItem text={(this.props.mode == "Web Development") ? "Projects" : "Solo"} 
      current={(this.props.current == 1) ? true : false}/>
      <NavlistItem text={(this.props.mode == "Web Development") ? "Code Samples" : "Editing"}  
      current={(this.props.current == 2) ? true : false}/>
      {
          this.props.mode == "Web Development" ? <NavlistItem text="Education" current={(this.props.current == 3) ? true : false}/> : null
      }

      </div>
    );
  }
}

export default Navlist;
