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

function Board(props) {
  const [flipped, setFlipped] = useState(false);

  function renderCard(i) {
    return <Card flipped={flipped} onClick={() => handleClick(i)} />;
  }

  function handleClick(i) {

  }

  return (
    <div className="board">
      {renderCard(1)}
      {renderCard(2)}
    </div>
  );
}

function Game(props) {
  return <Board />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Game />);
