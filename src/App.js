import React, { Component } from 'react';
import {NavigationBar} from "./components/NavigationBar";
import {Startpage} from './components/startpage/Startpage';
import {Introduction} from "./components/Introduction";
import {Timeline} from "./components/timeline/Timeline";
import {ProjectOverview} from "./components/projects/ProjectOverview";
import {Contact} from "./components/Contact";
import Footer from "./components/Footer";
import './App.css';

class App extends Component {

  render() {

      return (
        <div className="App">
            <NavigationBar/>
            <Startpage/>
            <Introduction/>
            <Timeline/>
            <ProjectOverview/>
            <Contact/>
            <Footer/>
        </div>
    );
  }
}
export default App;
