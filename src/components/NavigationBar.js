import React from 'react';
import "../styles/NavigationBar.css";

const NavigationBar = () => {
    return (
        <ul className="NavigationBar">
            <li className="navigation-item name"><a className="link" href="#Startpage">Sarah Schmid</a></li>
            <li className="navigation-item last"><a className="link" href="#Contact">Contact</a></li>
            <li className="navigation-item"><a className="link" href="#Projects">Projects</a></li>
            <li className="navigation-item"><a className="link" href="#Resume">Resume</a></li>
            <li className="navigation-item"><a className="link" href="#About">About</a></li>
        </ul>

    );
};

export default NavigationBar;