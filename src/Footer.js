import React, { Component } from 'react';
import './Footer.css';
import Tech from './Tech.js';
import Infos from './Infos.js';

class Footer extends Component {

  render() {
    return (
      <div className={"Footer " }>
        <p>
            <i onClick={(info) => this.onLinkClick("fb")} className="f fa fa-facebook-square" aria-hidden="true"></i>
            <i onClick={(info) => this.onLinkClick("gh")} className="f fa fa-github-square" aria-hidden="true"></i>
            <i onClick={(info) => this.onLinkClick("ig")} className="f fa fa-instagram" aria-hidden="true"></i>
        </p>
        <div className={"BTS "}>
            <h1>liambrozik.com</h1>
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

}

export default Footer;
