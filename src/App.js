import React, { Component } from 'react';
import './App.css';
import Container from './Container.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        cWidth: (window.matchMedia("(min-width: 550px)").matches) ? '500px' : '100vw',
        cHeight: (window.matchMedia("(min-width: 550px)").matches) ? '500px' : '100vh',
        marginLeft: (window.matchMedia("(min-width: 550px)").matches) ? '50vw' : '0',
        marginTop: (window.matchMedia("(min-width: 550px)").matches) ? '50vh' : '0',
        transform: (window.matchMedia("(min-width: 550px)").matches) ? 'translate(-250px, 15vh)' : 'none',
        radius: (window.matchMedia("(min-width: 550px)").matches) ? '80px' : '0'
    };
  }

  render() {
    return (
      <div className="App" style={{backgroundColor: 'rgb(235, 235, 235)'}}>
        <Container width={this.state.cWidth} height={this.state.cHeight} onHome={() => this.onHome()} handleClick={(info) => this.handlePortfolioClick(info)} marginTop={this.state.marginTop} marginLeft={this.state.marginLeft} transform={this.state.transform} radius={this.state.radius}/>
      </div>
    );

  }

  handlePortfolioClick(info) {
    if (info === "Video") {
      this.setState({
        cWidth: '100vw',
        cHeight: '100vh',
        marginLeft: '0vw',
        marginTop: '0vh',
        transform: 'translate(0px, 0vh)',
        radius: '0'
      });
    } else if (info === "Web Development") {
      this.setState({
        cWidth: '100vw',
        cHeight: '100vh',
        marginLeft: '0vw',
        marginTop: '0vh',
        transform: 'translate(0px, 0vh)',
        radius: '0'
      });
    }
  }

  onHome() {
    this.setState({
      cWidth: (window.matchMedia("(min-width: 550px)").matches) ? '500px' : '100vw',
      cHeight: (window.matchMedia("(min-width: 550px)").matches) ? '500px' : '100vh',
      marginLeft: (window.matchMedia("(min-width: 550px)").matches) ? '50vw' : '0',
      marginTop: (window.matchMedia("(min-width: 550px)").matches) ? '50vh' : '0',
      transform: (window.matchMedia("(min-width: 550px)").matches) ? 'translate(-250px, 15vh)' : 'none',
      radius: (window.matchMedia("(min-width: 550px)").matches) ? '80px' : '0'
  });
  }

}

export default App;
