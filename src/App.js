import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import Container from './Container.js';
import Feature from './Feature.js';
import Footer from './Footer.js';

class App extends Component {
  constructor(props) {
    super(props);


    this.state = {
      height: "0",
      past: false,
      prog: null
    };
  }

  render() {
    return (
      <div 
        className="App" ref="alpha" style={{backgroundColor: 'rgb(255, 255, 255)'}}>
        <Container 
        prog={this.state.prog}
        />
        <Feature 
          prog={this.state.prog}
          feat="TripTunes"
        />
        <Feature 
          prog={this.state.prog}
          feat="Chattr"
        />
        <Footer />
      </div>
      
    );

  }



  componentDidMount() {
    window.addEventListener("scroll", () => {
      if ($(window).scrollTop() >= ($(window).height()/8)) {
        this.setState({
          past: true, 
          prog: "one"
        });
      } else {
        this.setState({
          past: false
        });
      }
      this.setState({
        height: $(window).scrollTop()
      });
    });
  } 


}

export default App;
