import React from 'react';
import Navbar from './components/Navbar.js';
import ArticleBar from './components/ArticleBar';
import './App.css';

import Banana from './images/banana.jpg';
import Grapes from './images/grapes.jpg';
import Apple from './images/apple.jpeg';
import Orange from './images/orange.jpeg';
import Blueberries from './images/blueberries.jpg';

import Asparagus from './images/asparagus.jpg';
import Broccoli from './images/broccoli.jpg';
import Cabbage from './images/cabbage.jpg';
import Carrot from './images/carrot.jpg';
import Sweetcorn from './images/sweetcorn.jpg';

function App() {
  return (
    <div>
      <Navbar/>
      <ArticleBar SectionTitle="FRUITS" 
      ArticleTitle1="Bananarama makes a comeback" ArticleImage1={Banana} AltText1="This is a Banana"
      ArticleTitle2="Grapes are on the loose" ArticleImage2={Grapes} AltText2="This is a Grapes"
      ArticleTitle3="Apples are about" ArticleImage3={Apple} AltText3="This is an Apple"
      ArticleTitle4="Oranges are orange" ArticleImage4={Orange} AltText4="This is an Orange"
      ArticleTitle5="Blueberries!!" ArticleImage5={Blueberries} AltText5="This is a Blueberries"
      />
      <ArticleBar SectionTitle="VEGGIES" 
      ArticleTitle1="Asparagus?!" ArticleImage1={Asparagus} AltText1="This is Asparagus" 
      ArticleTitle2="Look at this Broccoli" ArticleImage2={Broccoli} AltText2="This is Broccoli"
      ArticleTitle3="You are a Cabbage" ArticleImage3={Cabbage} AltText3="This is Cabbage"
      ArticleTitle4="Carrot top? Carrot mop!" ArticleImage4={Carrot} AltText4="This is Carrot"
      ArticleTitle5="Sweetkorn on tour" ArticleImage5={Sweetcorn} AltText5="This is a Sweetcorn"
      />
    </div>
  );
}

export default App;
