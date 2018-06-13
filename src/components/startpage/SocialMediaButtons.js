import React, {Component} from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faLinkedinIn, faXing, faGithub} from '@fortawesome/fontawesome-free-brands';
import {faEnvelope} from '@fortawesome/fontawesome-free-regular';
import "../../styles/Startpage.css"

const linkedInUrl = "https://www.linkedin.com/in/sasahamburg/";
const xingUrl = "https://www.xing.com/profile/Sarah_Schmid25";
const githubUrl = "https://github.com/SarahSchmid";
const mailUrl = "mailto:sarah@schmid.hamburg";


export class SocialMediaButtons extends Component{
    render(){
        return (
            <div>
                <div className="hexagon">
                    <a className="button" href={linkedInUrl}><FontAwesomeIcon icon={faLinkedinIn} size="lg" className="icon"/></a>
                </div>
                <div className="hexagon">
                    <a className="button" href={xingUrl}><FontAwesomeIcon icon={faXing} size="lg" className="icon"/></a>
                </div>
                <div className="hexagon">
                    <a className="button" href={githubUrl}><FontAwesomeIcon icon={faGithub} size="lg" className="icon"/></a>
                </div>
                <div className="hexagon">
                    <a className="button" href={mailUrl}><FontAwesomeIcon icon={faEnvelope} size="lg" className="icon"/></a>
                </div>
            </div>);
    }
}
