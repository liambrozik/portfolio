import React, { Component } from 'react';
import './Container.css';
import Header from './Header.js';
import Avatar from './Avatar.js';
import About from './About.js';
import Title from './Title.js';
import Button from './Button.js';
import Navlist from './Navlist.js';
import ContentZone from './ContentZone.js';

class Container extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mode: 'Portfolios'
        }
    }

  render() {
    return (
      <div className={"Container " + this.props.VIEW + " " + this.props.scheme}>

        <Avatar 
            VIEW={this.props.VIEW} 
        />

        <Header 
            text="Liam Brozik" 
            VIEW={this.props.VIEW}
            scheme={this.props.scheme}
        />

        <About
                VIEW={this.props.VIEW}
        /> 
        <Title 
            VIEW={this.props.VIEW}
            text={this.props.mode} 
            scheme={this.props.scheme}
        />
        <Button 
            VIEW={this.props.VIEW}
            text="Web Development" 
            onClick={(info) => this.handlePortfolioClick(info)} 
        /> 
        <Button 
            VIEW={this.props.VIEW}
            text="Video" 
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
            color: 'rgb(220, 220, 220)',
          });
      }
      this.setState({
            mode: info
      })
    }
}

export default Container;
