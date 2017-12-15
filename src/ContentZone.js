import React, { Component } from 'react';
import Content from './Content.js';
import './ContentZone.css'

class ContentZone extends Component {
  render() {
    return (
      <div className={"ContentZone " + this.props.VIEW}>
        <Content 
          VIEW={this.props.VIEW}
          title="Trip Tunes"
          description="Combining Spotify API with Google Maps API to create a webapp that creates a playlist based off of a user's trip length and music preference."
          linkref="https://triptunes.now.sh"
          linktext={<i class="fa fa-external-link" aria-hidden="true"></i>}
          gif="https://i.imgur.com/YdF0c2l.gif"
          github="https://github.com/liambrozik/Trip-Tunes"
        />
        <Content 
          VIEW={this.props.VIEW}
          title="Chattr"
          description="Online chat app created using Firebase for realtime, multi channel chatting."
          linkref="https://challenge6-dae99.firebaseapp.com/"
          linktext={<i class="fa fa-external-link" aria-hidden="true"></i>}
          gif="https://i.imgur.com/8QZglCg.gif"
          github="https://github.com/liambrozik/Chattr"
        />
        
        <Content 
        VIEW={this.props.VIEW}/>
      </div>
    );
  }
}

export default ContentZone;
