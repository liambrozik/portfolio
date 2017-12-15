import React, { Component } from 'react';
import './App.css';
import Container from './Container.js';
import Menu from './Menu.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        VIEW: "HOME",
        scheme: "LIGHT",
        mode: "Portfolios"
    };
  }

  render() {
    return (
      <div className="App" style={{backgroundColor: 'rgb(255, 255, 255)'}}>
        <Container 
          VIEW={this.state.VIEW} 
          scheme={this.state.scheme} 
          handleClick={(info) => this.handlePortfolioClick(info)} 
          onHome={(info) => this.onHome(info)}
          mode={this.state.mode}
        />
        <Menu 
          VIEW={this.state.VIEW} 
          scheme={this.state.scheme} 
          mode={this.state.mode}
          onClick={(info) => this.handlePortfolioClick(info)}
        />
      </div>
    );

  }

  handlePortfolioClick(info) {
    if (info === "Video") {
      this.setState({
        VIEW: "PORTFOLIO",
        mode: "Video",
        scheme: "DARK"
      });
    } else if (info === "Web Development") {
      this.setState({
        VIEW: "PORTFOLIO",
        mode: "Web Development",
        scheme: "LIGHT"
      });
    } else {
      this.setState({
        VIEW: "HOME",
        mode: "Portfolios",
        scheme: "LIGHT"
      });
    }
  }

  onHome() {
    this.setState({
      VIEW: "HOME",
      mode: "Portfolios",
      scheme: "LIGHT"
  });
  }


}

export default App;
