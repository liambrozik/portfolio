import React, { Component } from 'react';
import './HomeBtn.css';

class HomeBtn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bg: 'rgba(240, 67, 0, 0.0)'
        };
    }
  render() {
    return (
      <div 
      onMouseOver={() => this.onHover(true)}
      onMouseOut={() => this.onHover(false)}
      onClick={(e) => this.onHome(e)}
      className={"HomeBtn " + this.props.VIEW}>
        <script src="https://use.fontawesome.com/0cae086453.js"></script>
        <i className="fa fa-home" aria-hidden="true"></i>

      </div>
    );
  }

  onHover(e) {
    if (e) {
        this.setState({
            bg: 'rgba(250, 67, 0, 0.1)'
        });
    } else {
        this.setState({
            bg: 'rgba(240, 67, 0, 0.0)'
        });
    }
  }

  onHome(e) {
      e.preventDefault();
      this.props.onHome();
  }
}

export default HomeBtn;
