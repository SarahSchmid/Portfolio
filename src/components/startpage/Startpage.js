import React, {Component} from 'react';
import SocialMediaButtons from "./SocialMediaButtons";
import "../../styles/Startpage.css";

export class Startpage extends Component{
    render(){
        return (
            <div id="Startpage">
                <div className="introduction">
                    <h1>Sarah Schmid</h1>
                    <div className="subtitle">Software Engineer & Scrum Mistress</div>
                    <SocialMediaButtons/>
                </div>

            </div>
        );
    }
}