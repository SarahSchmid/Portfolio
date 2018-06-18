import React, { Component } from 'react';
import {NavigationBar} from "./components/NavigationBar";
import {Startpage} from './components/startpage/Startpage';
import {Introduction} from "./components/Introduction";
import {Timeline} from "./components/timeline/Timeline";
import {ProjectOverview} from "./components/projects/ProjectOverview";
import {Contact} from "./components/Contact";
import {Footer} from "./components/Footer";
import CVData from "./components/timeline/content";
import './App.css';

class App extends Component {

  componentWillMount(){
      this.data = CVData.map((data, index) => {
          return ({
              component: (
                  <div key={index}>
                      <h2 className="timelineTitle">{data.title}</h2>
                      <i className="timelineSubtitle">{data.subtitle}</i>
                      <p className="timelineDate">{data.date}</p>
                      <p className="timelineDescription">{data.description}</p>
                  </div>
              )
          });

      });
  }

  render() {
    return (
        <div className="App">
            <NavigationBar/>
            <Startpage/>
            <Introduction/>
            <Timeline content={this.data}/>
            <ProjectOverview/>
            <Contact/>
            <Footer/>
        </div>
    );
  }
}
export default App;
