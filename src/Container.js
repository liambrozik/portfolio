import React, { Component } from 'react';
import './Container.css';
import Header from './Header.js';
import Avatar from './Avatar.js';
import About from './About.js';
import Title from './Title.js';
import Button from './Button.js';
import Navlist from './Navlist.js';
import ContentZone from './ContentZone.js';
import HomeBtn from './HomeBtn.js';

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'Portfolios',
            bgcolor: 'rgb(220, 220, 220)',
            color: 'rgb(37, 37, 37)',
        };
    }

  render() {
    return (
      <div 
        className="Container" 
        style={{
          overflow: 'hidden',

          backgroundColor: this.state.bgcolor,
          color: this.state.color,
          width: this.props.VIEW === "HOME" ? 
          ((window.matchMedia("(min-width: 550px)").matches) ? '500px' : '100vw') 
          : '100vw',
          height: this.props.VIEW === "HOME" ? 
          ((window.matchMedia("(min-width: 550px)").matches) ? '500px' : '100vh') 
          : '100vh',
          marginLeft: this.props.VIEW === "HOME" ?
          (window.matchMedia("(min-width: 550px)").matches) ? '50vw' : '0'
          : '0vw',
          transform: this.props.VIEW === "HOME" ? 
          (window.matchMedia("(min-width: 550px)").matches) ? 'translate(-250px, 15vh)' : 'none'
          : 'translate(0px, 0vh)',
          borderRadius: this.props.VIEW === "HOME" ? 
          (window.matchMedia("(min-width: 550px)").matches) ? '80px' : '0'
          : '0',
          willChange: 'width, height, margin-left, margin-top, border-radius, background-color, transform, color',
          transition: 'width 1000ms, height 1000ms, margin-left 1000ms, border-radius 1000ms, transform 1000ms, background-color 1000ms, color 1000ms'
        }}
      >

        <Avatar 
            VIEW={this.props.VIEW} 
        />

        <Header 
            text="Liam Brozik" 
            VIEW={this.props.VIEW}
            color={this.state.color} 
        />

        <HomeBtn 
            VIEW={this.props.VIEW}
            onHome={() => this.onHome()}
        /> 
        <About
                VIEW={this.props.VIEW}
        /> 
        <Title 
            VIEW={this.props.VIEW}
            text={this.state.mode} 
            color={this.state.color} 
            bgcolor={this.state.bgcolor} 
        />
        <Button 
            VIEW={this.props.VIEW}
            text="Web Development" 
            width="180" 
            height="60" 
            onClick={(info) => this.handlePortfolioClick(info)} 
        /> 
        <Button 
            VIEW={this.props.VIEW}
            text="Video" 
            width="180" 
            height="60" 
            onClick={(info) => this.handlePortfolioClick(info)} 
        /> 
        <Navlist 
            VIEW={this.props.VIEW}
            current="1" 
            mode={this.state.mode}
        /> 
        <ContentZone
            VIEW={this.props.VIEW} 
        /> 
      </div>
    );
    }

  handlePortfolioClick(info) {
      this.props.handleClick(info);
      if (info === "Video") {
          this.setState({
            bgcolor: 'rgb(15, 15, 15)',
            color: 'rgb(220, 220, 220)'
          });
      }
      setTimeout(() => {
        this.setState({
            mode: info, 
        });
      }, 1000); 
    }

    onHome() {
        this.props.onHome();
        this.setState({
            bgcolor: 'rgb(220, 220, 220)',
            color: 'rgb(37, 37, 37)'
        });

        setTimeout(() => {
            this.setState({
                mode: 'Portfolios'
            });
          }, 1000); 
    };
}

export default Container;
