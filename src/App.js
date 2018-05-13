import React, { Component } from 'react';
import './App.css';
import WordComponent from "./components/WordComponent"
import NGComponent from './components/NGComponent'
import UIComponent from './components/UIComponent'
import GuessCountComponent from './components/GuessCountComponent'
import TriedLettersComp from './components/TriedLettersComp'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="WordDiv">
          <WordComponent className="WordComp" word='ass'/>
          <NGComponent/>
          <UIComponent/>
          <TriedLettersComp/>
          <GuessCountComponent/>
        </div>

      </div>
    );
  }
}

export default App;
