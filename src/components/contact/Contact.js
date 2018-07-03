import React from 'react';
import ContactLinks from './ContactLinks';
import {faLinkedinIn, faXing, faGithub} from '@fortawesome/fontawesome-free-brands';
import {faEnvelope} from '@fortawesome/fontawesome-free-regular';
import "../../styles/Contact.css";
import "../../App.css";
import contactPicture from "../../images/introduction.jpg";

const linkedInUrl = "https://www.linkedin.com/in/sasahamburg/";
const xingUrl = "https://www.xing.com/profile/Sarah_Schmid25";
const githubUrl = "https://github.com/SarahSchmid";
const mailUrl = "mailto:sarah@schmid.hamburg";

const Contact = () => {
    return(
        <div id="Contact">
            <div className="topicHeader">CONTACT</div>
            <h1 className="headline">
                Contact me, if I could be your next code monkey ;)
            </h1>
            <div className="center">
                <div className="contactInformation">
                    <ContactLinks url={mailUrl} icon={faEnvelope} title="sarah@schmid.hamburg"/>
                    <ContactLinks url={linkedInUrl} icon={faLinkedinIn} title="LinkedIn"/>
                    <ContactLinks url={xingUrl} icon={faXing} title="Xing"/>
                    <ContactLinks url={githubUrl} icon={faGithub} title="Github"/>
                </div>
                <img className="contactPicture" src={contactPicture} alt="Contact"/>
            </div>
        </div>
    );
};

export default Contact;
