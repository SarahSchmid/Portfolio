import React from 'react';
import {Project} from "./Project";
import '../../App.css';
import '../../styles/Projects.css';
import portfolioImageSrc from '../../images/portfolio.png';

/*Portfolio*/
const portfolioRepoUrl = "https://github.com/SarahSchmid/Portfolio";
const portfolioDescription = "My personal page which I use to share my current projects and tell you cool stuff about myself";
const portfolioAppUrl = "http://schmid.hamburg";

const ProjectOverview = () => {
    return (
        <div id="Projects">
            <div className="topicHeader">PROJECTS</div>
            <div className="projectWrapper">
                <Project imgSrc={portfolioImageSrc}
                         repoUrl={portfolioRepoUrl}
                         appUrl={portfolioAppUrl}
                         description={portfolioDescription}
                         title="Portfolio"/>
            </div>

        </div>

    );
};

export default ProjectOverview;