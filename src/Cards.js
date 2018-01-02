import React, { Component } from 'react';
import Card from './Card.js';
import './Cards.css';

class Cards extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

  render() {
    return (
      this.props.feat === "TripTunes" ?
      <div className={"Cards "}>
        <Card text={<p>Working with Nodejs and OAuth2 to create playlists with the <b>Spotify API</b></p>} icon={<i className="fa fa-volume-up" aria-hidden="true"></i>} 
        feat={this.props.feat}/>
        <Card text={<p>Using <b>Material Design</b> for a modern, consistent, and responsive interface</p>} icon={<i className="fa fa-th-large" aria-hidden="true"></i>} 
        feat={this.props.feat}/>
        <Card text={<p>Practicing <b>pair programming</b> and team GitHub collaboration</p>} icon={<i className="fa fa-code-fork" aria-hidden="true"></i>} 
        feat={this.props.feat}/>
      </div>
      : 
      <div className={"Cards "}>
      <Card text={<p>Working with <b>Firebase</b> User Authentication and NoSQL realtime database</p>} icon={<i className="fa fa-database" aria-hidden="true"></i>} 
      feat={this.props.feat}/>
      <Card text={<p>Using <b>Bootstrap</b> for a fully responsive, mobile-first user experience</p>} icon={<i className="fa fa-mobile" aria-hidden="true"></i>} 
      feat={this.props.feat}/>
      <Card text={<p>Practing the <b>fundamentals</b> at work behind React and JSX</p>} icon={<i className="fa fa-code" aria-hidden="true"></i>} 
      feat={this.props.feat}/>
    </div>
    );
    }
}

export default Cards;
