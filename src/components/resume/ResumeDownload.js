import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faFilePdf} from '@fortawesome/fontawesome-free-regular';

const ResumeDownload = () => {
    return(
        <div className="download">
            <a className="downloadButton" target="_blank" rel="noopener noreferrer" href="https://www.downloadcv.de">
                <FontAwesomeIcon icon={faFilePdf}/> Resume</a>
        </div>
    );
};

export default ResumeDownload;