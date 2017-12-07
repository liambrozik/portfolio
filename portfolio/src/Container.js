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
            margin: this.props.margin,
            avatarFloat: 'none',
            avatarMarginLeft: '-310px',
            avatarMarginTop: '30px',
            avatarSize: '125',
            headerPaddingLeft: '40px',
            headerMarginTop: '0px',
            headerFontSize: '48px',
            titlePWidth: '150px',
            titleWidth: '75',
            titleMarginTop: '40px',
            aboutOpacity: '1',
            buttonOpacity: '1',
            titleOpacity: '1',
            bgcolor: 'rgb(220, 220, 220)',
            color: 'rgb(37, 37, 37)',
            showWelcome: true, 
            limarginLeft: '-50vw',
            contentzoneTop: '-100vh',
            homeTop: '-100px',
            aboutHeight: '1px'
        };
    }

  render() {
    return (
      <div className="Container" style={{
          backgroundColor: this.state.bgcolor,
          overflow: 'hidden',
          color: this.state.color,
          width: this.props.width,
          height: this.props.height,
          marginLeft: this.props.marginLeft,
          transform: this.props.transform,
          transition: 'width 1s, height 1s, margin-left 1s, border-radius 1s, transform 1s, background-color 1s, color 1s',
          borderRadius: this.props.radius
      }}>
        <Avatar size={this.state.avatarSize} float={this.state.avatarFloat} marginLeft={this.state.avatarMarginLeft} marginTop={this.state.avatarMarginTop}/>
        <Header text="Liam Brozik" paddingLeft={this.state.headerPaddingLeft} fontSize={this.state.headerFontSize} marginTop={this.state.headerMarginTop} color={this.state.color} />
        {
            !this.state.showWelcome ? <HomeBtn top={this.state.homeTop} onHome={() => this.onHome()}/> : null
        }
        {
            this.state.showWelcome ? <About opacity={this.state.aboutOpacity} height={this.state.aboutHeight}/> : null
        }

        <Title text={this.state.mode} width={this.state.titleWidth} pwidth={this.state.titlePWidth} marginTop={this.state.titleMarginTop} color={this.state.color} bgcolor={this.state.bgcolor} opacity={this.state.titleOpacity} />

        {
            this.state.showWelcome ? <Button text="Web Development" width="180" height="60" onClick={(info) => this.handlePortfolioClick(info)} opacity={this.state.buttonOpacity} /> : null
        }
        {
            this.state.showWelcome ? <Button text="Video" width="180" height="60" onClick={(info) => this.handlePortfolioClick(info)} opacity={this.state.buttonOpacity} /> : null
        }
        {
            !this.state.showWelcome ? <Navlist current="1" limarginLeft={this.state.limarginLeft} mode={this.state.mode}/> : null
        }

{
            !this.state.showWelcome ? <ContentZone top={this.state.contentzoneTop}/> : null
        }

        
      </div>
    );
    }

  componentWillUnmount() {

  }

  handlePortfolioClick(info) {
      this.props.handleClick(info);
      if (info === "Video") {
          this.setState({
            bgcolor: 'rgb(15, 15, 15)',
            color: 'rgb(220, 220, 220)'
          });
      }
      this.setState({
        aboutOpacity: '0',
        buttonOpacity: '0',
        titleOpacity: '0',
        headerPaddingLeft: '5vw',
        headerMarginTop: '-55px',
        headerFontSize: '24px', 
        avatarMarginLeft: '-95vw',
        avatarMarginTop: '5px',
        avatarSize: '65',
        titlePWidth: '350px',
        titleWidth: '50',
        titleMarginTop: '-220px',
      });
      setTimeout(() => {
        this.setState({
            titleMarginTop: '-13px',
            titleOpacity: '1',
            mode: info, 
            showWelcome: false,
            limarginLeft: '-50vw',
            contentzoneTop: '100vh',
            homeTop: '-100px'
        });
      }, 1000); 
      setTimeout(() => {
        this.setState({
            limarginLeft: '7.5vw',
            contentzoneTop: '40px',
            homeTop: '19px'
        });
      }, 1500); 
    }

    onHome() {
        this.props.onHome();
        this.setState({
            limarginLeft: '-50vw',
            contentzoneTop: '100vh',
            mode: 'Portfolios',
            margin: this.props.margin,
            avatarFloat: 'none',
            avatarMarginLeft: '-310px',
            avatarMarginTop: '30px',
            avatarSize: '125',
            headerPaddingLeft: '40px',
            headerMarginTop: '0px',
            headerFontSize: '48px',
            titlePWidth: '150px',
            titleWidth: '75',
            titleMarginTop: '40px',
            aboutOpacity: '0',
            buttonOpacity: '0',
            titleOpacity: '0',
            bgcolor: 'rgb(220, 220, 220)',
            color: 'rgb(37, 37, 37)',
            limarginLeft: '-50vw',
            homeTop: '-100px',
            aboutHeight: '1px'
        });

        setTimeout(() => {
            this.setState({
                showWelcome: true,
                aboutOpacity: '1',
                buttonOpacity: '1',
                titleOpacity: '1'
            });
          }, 1000); 
    };
}

export default Container;
