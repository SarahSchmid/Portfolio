import React, { Component } from 'react';
import {NavigationBar} from "./components/NavigationBar";
import {Startpage} from './components/startpage/Startpage';
import {Introduction} from "./components/Introduction";
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
            <Startpage/>
            <NavigationBar/>
            <Introduction/>
        </div>
    );
  }
}
export default App;
