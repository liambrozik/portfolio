import React, { Component } from 'react';
import Info from './Info.js';
import './Infos.css';

class Infos extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

  render() {
    return (
        this.props.feat === "TripTunes" ?
      <div className={"Infos "}>
        <Info 
            text={<div><b><i className="fa fa-info" aria-hidden="true"></i>The idea</b><p>Trip Tunes is an app that allows users to create Spotify playlists for road trips or their daily commute.</p></div>}
        />
        <Info 
            text={<div><b><i className="fa fa-question" aria-hidden="true"></i>Why?</b><p>This app was for a final project in a web development course. We could do anything, so we decided to undertake an oppurtunity to learn about working with Node and the Spotify API.</p></div>}
        />
        <Info 
            text={<div><b><i className="fa fa-users" aria-hidden="true"></i>Contributions</b><p>I designed and implemented all of the UI/UX. I was also involved in figuring out authorization and redirects, along with adding <a href="https://developer.spotify.com/web-api/get-recommendations/">Spotify recommendations</a> functionality for more interesting playlists.</p></div>}
        />
        <Info 
            text={<div><b><i className="fa fa-lightbulb-o" aria-hidden="true"></i>The future</b><p>I'm looking at improving the mobile experience. Adding support for multiple artists for more tailored playlists. A Chrome extension to Google Maps would be cool...</p></div>}
        />
      </div>
      : this.props.feat === "Chattr" ?
      <div className={"Infos "}>
      <Info 
          text={<div><b><i className="fa fa-info" aria-hidden="true"></i>The idea</b><p>Chattr is a multi-channel, realtime chatting application. Users can talk in a public general chat or start private conversations of their own.</p></div>}
      />
      <Info 
          text={<div><b><i className="fa fa-question" aria-hidden="true"></i>Why?</b><p>This app was for a class project in a web development course. We were assigned to build a single channel chat, but I decided to take it a step further and allow users to chat privately with anyone they'd like. Chattr was a great opportunity to learn about interactions between databases and web apps.</p></div>}
      />
      <Info 
          text={<div><b><i className="fa fa-users" aria-hidden="true"></i>Contributions</b><p>This was an independent project. I was responsible for all of the UI and database design, along with the implementation.</p></div>}
      />
      <Info 
          text={<div><b><i className="fa fa-lightbulb-o" aria-hidden="true"></i>The future</b><p>I'm currently in the midst of a React redesign of the app. The purpose of the project, with all of its Vanilla JS element creation, was to make us appreciate React and JSX. I decided to take it there. Support for Markdown is also a possibility.</p></div>}
      />
    </div>
    : 
    <div className={"Infos " + this.props.feat}>
    <Info 
        feat={this.props.feat} text={<div><b><i className="fa fa-info" aria-hidden="true"></i>The idea</b><p>This portfolio was a fantastic opportunity for me to practice designing in React. I am fascinated by <a href="https://reactjs.org/docs/thinking-in-react.html">Thinking In React</a> and have been experimenting with different methods of design and state management. This portfolio has already undergone a fundamental redesign due to poor performance, you can track my progression on the <a href="https://github.com/liambrozik/portfolio/issues">issues page</a> of the GitHub for this project. If you have any suggestions, questions, or if you just want to chat, please <a href="mailto:liambrozik@gmail.com">hit me up</a>.</p></div>}
    />
    <Info 
        feat={this.props.feat} text={<div><b><i className="fa fa-lightbulb-o" aria-hidden="true"></i>The future</b><p>I am going to keep adding new (and old) projects. I'm always reading and trying to improve both the UI and under-the-hood design of this portfolio. I hope to eventually implement some sort of navigation bar, and possibly some analytics? </p></div>}
    />
  </div>
    );
    }
}

export default Infos;
