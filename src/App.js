import React, { Component } from 'react';
import {NavigationBar} from "./components/NavigationBar";
import {Startpage} from './components/startpage/Startpage';
import {Introduction} from "./components/Introduction";
import {Contact} from "./components/Contact";
import './App.css';
import {Footer} from "./components/Footer";

class App extends Component {
  render() {
    return (
        <div className="App">
            <NavigationBar/>
            <Startpage/>
            <div className="topicHeader">ABOUT</div>
            <Introduction/>
            <div className="topicHeader">CONTACT</div>
            <Contact/>
            <Footer/>
        </div>
    );
  }
}
export default App;
