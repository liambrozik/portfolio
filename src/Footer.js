import React, { Component } from 'react';
import './Footer.css';
import Tech from './Tech.js';
import Infos from './Infos.js';

class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            about: "false"
        }
    }

  render() {
    return (
      <div className={"Footer " + this.state.about}>
        <a href="#about"
            onClick={() => this.onAboutClick()}
        >
            {
            this.state.about === "false" ?
            <span><i className="fa fa-info-circle" aria-hidden="true"></i>About this portfolio</span>
            : 
            <span id="BTSclose"><i className="fa fa-times-circle" aria-hidden="true"></i>Hide</span>
            }
        </a>
        <p>
            <i onClick={(info) => this.onLinkClick("fb")} className="f fa fa-facebook-square" aria-hidden="true"></i>
            <i onClick={(info) => this.onLinkClick("gh")} className="f fa fa-github-square" aria-hidden="true"></i>
            <i onClick={(info) => this.onLinkClick("ig")} className="f fa fa-instagram" aria-hidden="true"></i>
        </p>

        <div className={"BTS " + this.props.about}>
            <h1>Portfolio</h1>
            <span id="BTSTech"><Tech text="React" order="one"/></span>
            <Infos feat="BTS" />
            <i id="BTSgh" onClick={(info) => this.onLinkClick("btsgh")} className="fa fa-github" aria-hidden="true"></i>
        </div>
      </div>
    );
    }

    onLinkClick(info) {
        if (info === "ig") {
            window.open("https://www.instagram.com/liambrozik/",'_blank');
        } else if (info === "gh") {
            window.open("https://github.com/liambrozik",'_blank');
        } else if (info === "btsgh") {
            window.open("https://github.com/liambrozik/portfolio",'_blank');
        } else {
            window.open("https://www.facebook.com/liambrozik",'_blank');
        }
    }

    onAboutClick() {
        if (this.state.about === "false") {
            this.setState({
                about: "true"
            });
        } else {
            this.setState({
                about: "false"
            });
        }
    }
}

export default Footer;
