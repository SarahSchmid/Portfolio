import React, {Component} from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faLinkedin, faXing, faGithub} from '@fortawesome/fontawesome-free-brands';
import {faEnvelope} from '@fortawesome/fontawesome-free-solid';

const linkedInUrl = "https://www.linkedin.com/in/sasahamburg/";
const xingUrl = "https://www.xing.com/profile/Sarah_Schmid25";
const githubUrl = "https://github.com/SarahSchmid";


export class SocialMediaButtons extends Component{
    render(){
        return (
            <div>
                <a href={linkedInUrl}><FontAwesomeIcon icon={faLinkedin}/></a>
                <a href={xingUrl}><FontAwesomeIcon icon={faXing}/></a>
                <a href={githubUrl}><FontAwesomeIcon icon={faGithub}/></a>
                <a href={"mailto: sarah@schmid.hamburg"}><FontAwesomeIcon icon={faEnvelope}/></a>
            </div>);
    }
}
