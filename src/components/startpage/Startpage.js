import React from 'react';
import SocialMediaButtons from "./SocialMediaButtons";
import "../../styles/Startpage.css";

const Startpage = () => {
    return (
        <div id="Startpage">
            <div className="introduction">
                <h1>Sarah Schmid</h1>
                <div className="subtitle">Software Engineer & Scrum Mistress</div>
                <SocialMediaButtons/>
            </div>

        </div>
    );
};

export default Startpage;