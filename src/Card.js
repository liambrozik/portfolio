import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

  render() {
    return (
      <div className={"Card " + this.props.feat}>
        {this.props.icon}
        {this.props.text}
      </div>
    );
    }
}

export default Card;
