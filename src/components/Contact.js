import React, {Component} from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faLinkedinIn, faXing, faGithub} from '@fortawesome/fontawesome-free-brands';
import {faEnvelope} from '@fortawesome/fontawesome-free-regular';
import "../styles/Contact.css";
import "../App.css";
import contactPicture from "../images/contact_picture.jpg";

const linkedInUrl = "https://www.linkedin.com/in/sasahamburg/";
const xingUrl = "https://www.xing.com/profile/Sarah_Schmid25";
const githubUrl = "https://github.com/SarahSchmid";
const mailUrl = "mailto:sarah@schmid.hamburg";

export class Contact extends Component{
    render(){
        return(
            <div id="Contact">
                <h1 className="headline">
                    Contact me, if you like what you see ;)
                </h1>
                <div className="center">
                    <div className="contactInformation">
                        <a className="contactLink" href={mailUrl}><p><FontAwesomeIcon icon={faEnvelope}/> sarah@schmid.hamburg</p></a>
                        <a className="contactLink" href={linkedInUrl}><p><FontAwesomeIcon icon={faLinkedinIn}/> LinkedIn</p></a>
                        <a className="contactLink" href={xingUrl}><p><FontAwesomeIcon icon={faXing}/> Xing</p></a>
                        <a className="contactLink" href={githubUrl}><p><FontAwesomeIcon icon={faGithub}/> Github</p></a>
                    </div>
                    <div className="contactPicture">
                        <img src={contactPicture} alt="Contact"/>
                    </div>
                </div>
            </div>
        );
    }
}