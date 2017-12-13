import React, { Component } from 'react';
import './App.css';
import Container from './Container.js';
import Menu from './Menu.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        VIEW: "HOME",
        scheme: "LIGHT"
    };
  }

  render() {
    return (
      <div className="App" style={{backgroundColor: 'rgb(235, 235, 235)'}}>
        <Container VIEW={this.state.VIEW} 
        scheme={this.state.scheme} handleClick={(info) => this.handlePortfolioClick(info)} 
        onHome={(info) => this.onHome(info)}/>
        <Menu VIEW={this.state.VIEW} scheme={this.state.scheme} />
      </div>
    );

  }

  handlePortfolioClick(info) {
    if (info === "Video") {
      this.setState({
        VIEW: "PORTFOLIO",
        scheme: "DARK"
      });
    } else if (info === "Web Development") {
      this.setState({
        VIEW: "PORTFOLIO",
        scheme: "LIGHT"
      });
    }
  }

  onHome() {
    this.setState({
      VIEW: "HOME",
      scheme: "LIGHT"
  });
  }

}

export default App;
