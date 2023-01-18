import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Card(props) {
  return (
    <div className='card'>
      <img alt='' src='https://picsum.photos/id/450/100/200' />
      <img alt='' src='https://picsum.photos/id/200/100/200' />
    </div>
  );
}

function Board(props) {
  function renderCard() {
    return (
      <Card />
    );
  }

  return (
    <div id='board'>
      {renderCard()}
      {renderCard()}
    </div>
  );
}

function Game(props) {
  return (
    <Board />
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Game />);
