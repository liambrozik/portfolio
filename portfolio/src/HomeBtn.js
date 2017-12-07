import React, { Component } from 'react';

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
      className="HomeBtn" 
      style={{
          color: 'rgb(240, 67, 0)',
          backgroundColor: this.state.bg,
          fontSize: '34px',
          position: 'absolute',
          width: '45px',
          height: '45px',
          top: this.props.top,
          borderRadius: '50%',
          paddingTop: '1px',
          left: '12vw',
          cursor: 'pointer',
          transition: 'background-color 1s, top 1s, left 1s, color 1s'
      }}>
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
