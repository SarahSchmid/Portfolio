import React from 'react';
import {Project} from "./Project";
import '../../App.css';
import '../../styles/Projects.css';
import travelMapImageSrc from '../../images/heregoes.png';

/*Travel Map*/
const travelMapRepoUrl = "https://github.com/SarahSchmid/travel-map";
const travelMapDescription = "My travel map where I share my favorite spots of planet earth";
const travelMapAppUrl = "http://heregoes.schmid.hamburg";

const ProjectOverview = () => {
    return (
        <div id="Projects">
            <div className="topicHeader">PROJECTS</div>
            <div className="projectWrapper">
                <Project imgSrc={travelMapImageSrc}
                         repoUrl={travelMapRepoUrl}
                         appUrl={travelMapAppUrl}
                         description={travelMapDescription}
                         title="Travel Map"/>
            </div>

        </div>

    );
};

export default ProjectOverview;