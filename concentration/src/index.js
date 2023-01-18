import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Card(props) {
  return (
    <div className={'card' + (props.flipped ? ' flipped' : '')} onClick={props.onClick}>
      <div className="face front">
        <img alt="" src="https://picsum.photos/id/350/100/200" />
      </div>
      <div className="face back"></div>
    </div>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: Array(2).fill(false),
    };
  }

  renderCard(i) {
    return <Card flipped={this.state.cards[i]} onClick={() => this.handleClick(i)} />;
  }

  handleClick(i) {
    const cards = this.state.cards.slice();
    cards[i] = !cards[i];
    this.setState({ cards: cards });
  }

  render() {
    return (
      <div className="board">
        {this.renderCard(1)}
        {this.renderCard(2)}
      </div>
    );
  }
}

function Game(props) {
  return <Board />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Game />);
