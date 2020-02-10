import React from 'react';
import './App.css';

import NewsPanel from './components/NewsPanel';
import NewsObject from './components/NewsObject';

import Airplane from './images/Airplane.jpeg';
import Classroom from './images/classroom.jpeg';
import Excercise from './images/excercise.jpeg';
import Football from './images/football.jpeg';
import Nurse from './images/nurse.jpeg';
import Vegetables from './images/vegetables.jpg';

const airplaneArticle = new NewsObject(Airplane, 'Passengers boarding aircraft', 'This is the headline', 'Travel');

function App() {
  return (
    <div className="main-content-container">
      <NewsPanel Article1={airplaneArticle}/>
      <NewsPanel/>
    </div>
  );
}

export default App;
