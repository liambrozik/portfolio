import React, { Component } from 'react';
import './App.css';
import Container from './Container.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        VIEW: "HOME",
    };
  }

  render() {
    return (
      <div className="App" style={{backgroundColor: 'rgb(235, 235, 235)'}}>
        <Container VIEW={this.state.VIEW} 
        handleClick={(info) => this.handlePortfolioClick(info)} 
        onHome={(info) => this.onHome(info)}/>
      </div>
    );

  }

  handlePortfolioClick(info) {
    if (info === "Video") {
      this.setState({
        VIEW: "PORTFOLIO",
      });
    } else if (info === "Web Development") {
      this.setState({
        VIEW: "PORTFOLIO",
      });
    }
  }

  onHome() {
    this.setState({
      VIEW: "HOME"
  });
  }

}

export default App;
