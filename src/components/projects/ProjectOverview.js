import React, {Component} from 'react';
import {Project} from "./Project";
import '../../App.css';
import '../../styles/Projects.css';

export class ProjectOverview extends Component{
    render(){
        return (
            <div id="Projects">
                <div className="topicHeader">PROJECTS</div>
                <div className="projectWrapper">
                    <Project/>
                    <Project/>
                </div>

            </div>

        );
    }
}