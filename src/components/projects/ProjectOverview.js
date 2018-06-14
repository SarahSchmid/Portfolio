import React, {Component} from 'react';
import {Project} from "./Project";

export class ProjectOverview extends Component{
    render(){
        return (
            <div id="Projects">
                <div className="projectWrapper">
                    <Project/>
                    <Project/>
                </div>

            </div>

        );
    }
}