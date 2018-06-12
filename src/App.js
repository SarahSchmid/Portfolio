import React, { Component } from 'react';
import {NavigationBar} from "./components/NavigationBar";
import {Startpage} from './components/startpage/Startpage';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
            <Startpage/>
            <NavigationBar/>
        </div>
    );
  }
}

export default App;
