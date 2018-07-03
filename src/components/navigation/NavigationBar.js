import React from 'react';
import NavigationItem from './NavigationItem';
import "../../styles/NavigationBar.css";

const NavigationBar = () => {
    return (
        <ul className="NavigationBar">
            <NavigationItem class="navigation-item name" anchor="#Startpage" title="Sarah Schmid"/>
            <NavigationItem class="navigation-item last" anchor="#Contact" title="Contact"/>
            {/* <NavigationItem class="navigation-item" anchor="#Projects" title="Projects"/> */}
            <NavigationItem class="navigation-item" anchor="#Resume" title="Resume"/>
            <NavigationItem class="navigation-item" anchor="#About" title="About"/>
        </ul>

    );
};

export default NavigationBar;