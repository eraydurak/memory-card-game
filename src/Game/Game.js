import React, { Component } from "react";
import "./Game.scss";
import { ReactSVG } from "react-svg";
import angular from "../Svgs/angular.svg";
import javascript from "../Svgs/javascript.svg";
import reactsvg from "../Svgs/reactsvg.svg";
import sass from "../Svgs/sass.svg";
import typescript from "../Svgs/typescript.svg";
import vue from "../Svgs/vue.svg";
import MemoryCard from "./MemoryCard.js";

const cardIds = [
  { img: angular },
  { img: javascript },
  { img: reactsvg },
  { img: sass },
  { img: typescript },
  { img: vue },
  { img: angular },
  { img: javascript },
  { img: reactsvg },
  { img: sass },
  { img: typescript },
  { img: vue },
];


function generateDeck() {
const deck = [];
for(let i=0; i < 12; i++){
  deck.push({
    isFlipped: false,
    card: cardIds[i % 6]
  })
}
return shuffle(deck);
}


function shuffle(a){
  for (let i = a.length -1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    // eslint-disable-next-line no-unused-expressions
    [a[i], a[j] = [a[j], a[i]]];
  }

  return a;
}


export class Game extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      value: 0,
      deck: generateDeck(),
      pickedCards: []
    };
    this.clicked = this.clicked.bind(this);
  }


  pickedCards(cardIndex){
    if (this.state.deck[cardIndex].isFlipped){
      return;
    }
    const cardToFlip = {...this.state.deck[cardIndex] };
    cardToFlip.isFlipped = true;

    let newPickedCards = this.state.pickedCards.concat(cardIndex);
    const newDeck = this.state.deck.map((card, index) => {
      if (cardIndex === index) {
        return cardToFlip;
      }
      return card;
    });

    if (newPickedCards.length === 2) {
      const card1Index = newPickedCards[0];
      const card2Index = newPickedCards[1];
      if (newDeck[card1Index].symbol !== newDeck[card2Index].symbol) {
        setTimeout(() => {
          this.unflipCards(card1Index, card2Index);
        }, 1000);
      }
      newPickedCards = [];
    }

    this.setState({
      deck: newDeck,
      pickedCards: newPickedCards
    });
  }


  unflipCards(card1Index, card2Index) {
    const card1 = { ...this.state.deck[card1Index] };
    const card2 = { ...this.state.deck[card2Index] };
    card1.isFlipped = false;
    card2.isFlipped = false;

    const newDeck = this.state.deck.map((card, index) => {
      if (card1Index === index) {
        return card1;
      }
      if (card2Index === index) {
        return card2;
      }
      return card;
    });

    this.setState({ deck: newDeck });
  }


  clicked(event) {
    this.setState({ value: this.state.value + 1 });
  }
  render() {
    const cardsJSX = this.state.deck.map((card, index) => {
      return (
        <MemoryCard
          key={index}
          symbol={card.symbol}
          isFlipped={card.isFlipped}
          pickCard={this.pickCard.bind(this, index)}
        />
      );
    });

    return (
      <div className="container">
        <div className="counter1">
          <p>You Clicked : </p>
          <p className="count">{this.state.value}</p>
        </div>
    return (
      <div className="App">
        <header className="App-header">
          <h1>Memory Game</h1>
          <h3>Match cards to win</h3>
        </header>
        <div className="App-cards">
          {cardsJSX.slice(0, 3)}
          {cardsJSX.slice(3, 6)}
          {cardsJSX.slice(6, 9)}
          {cardsJSX.slice(9, 12)}
        </div>
      </div>
        <div className="counter2">
          <p>You Found:</p>
          <p className="count">&nbsp;0</p>
        </div>
      </div>
    );
  }
};

export default Game;
