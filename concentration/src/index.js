import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Card(props) {
  return (
    <div className='card'>
      <div className='face front'>
        <img alt='' src='https://picsum.photos/id/350/100/200' />
      </div>
      <div className='face back'></div>
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
    <div className='board'>
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
