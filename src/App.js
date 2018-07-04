import React, {Component} from 'react';
import NavigationBar from "./components/navigation/NavigationBar";
import Startpage from './components/startpage/Startpage';
import Introduction from "./components/Introduction";
import {Resume} from "./components/resume/Resume";
import ProjectOverview from "./components/projects/ProjectOverview";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer";
import './App.css';

class App extends Component {

  render() {

      return (
        <div className="App">
            <NavigationBar/>
            <Startpage/>
            <Introduction/>
            <Resume/>
            <ProjectOverview/>
            <Contact/>
            <Footer/>
        </div>
    );
  }
}
export default App;
