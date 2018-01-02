import React, { Component } from 'react';
import './Feature.css';
import Tech from './Tech.js';
import Cards from './Cards.js';
import Infos from './Infos.js';
import Links from './Links.js';

class Feature extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

  render() {
    return (
      (this.props.feat === "TripTunes") ?
      <div className={"Feature " + this.props.feat}>
        <h2 className={this.props.prog}>Trip Tunes</h2>
        <div className="TechBox">
            <Tech text="jQuery" order={this.props.prog === "one" ? "one" : null}/>
            <Tech text="API" order={this.props.prog === "one" ? "two" : null}/>
            <Tech text="Node" order={this.props.prog === "one" ? "three" : null}/>
        </div>
        <Links deploy="https://triptunes.now.sh" gh="https://github.com/liambrozik/Trip-Tunes" />
        <Infos feat={this.props.feat}/>
        <Cards feat={this.props.feat}/>
      </div>
      : (this.props.feat === "Chattr") ?
      <div className={"Feature " + this.props.feat}>
      <h2 className={this.props.prog}>Chattr</h2>
      <div className="TechBox">
          <Tech text="Firebase" order={this.props.prog === "one" ? "one" : null}/>
          <Tech text="Bootstrap" order={this.props.prog === "one" ? "two" : null}/>
      </div>
      <Links deploy="https://challenge6-dae99.firebaseapp.com/" gh="https://github.com/liambrozik/Chattr" />
      <Infos feat={this.props.feat}/>
      <Cards feat={this.props.feat}/>
    </div>
    : null
    );
    }
}

export default Feature;
