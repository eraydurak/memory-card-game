import React, { Component } from 'react'
import './MemoryCard.css';

class Card extends Component {
  render() {
    let innerClass = "MemoryCard__inner";
    if (this.props.isFlipped) {
      innerClass += ' flipped';
    }
    return (
    <div className="container">
      <div className="MemoryCard" onClick={this.props.pickCard}>
        <div className={innerClass}>
          <div className="MemoryCard__back">
          </div>
          <div className="MemoryCard__front">
            {this.props.symbol}
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default Card;