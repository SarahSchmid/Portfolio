import React, { Component } from 'react';
import fontawesome from '@fortawesome/fontawesome';
import regular from '@fortawesome/fontawesome-free-regular';
import solid from '@fortawesome/fontawesome-free-solid';
import brands from '@fortawesome/fontawesome-free-brands';
import {Startpage} from './startpage/Startpage';
import './App.css';


fontawesome.library.add(regular, solid, brands );



class App extends Component {
  render() {
    return (
        <div className="App">
            <Startpage/>
        </div>
    );
  }
}

export default App;
