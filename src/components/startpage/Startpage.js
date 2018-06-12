import React, {Component} from 'react';
import {SocialMediaButtons} from "./SocialMediaButtons";
import "../../styles/Startpage.css";

export class Startpage extends Component{
    render(){
        return (
            <div className="Startpage">
                <SocialMediaButtons/>
            </div>
        );
    }
}