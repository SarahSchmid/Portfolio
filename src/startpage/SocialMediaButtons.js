import React, {Component} from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const linkedInUrl = "https://www.linkedin.com/in/sasahamburg/";


export class SocialMediaButtons extends Component{
    render(){
        return (
            <div>
                <a href={linkedInUrl}><FontAwesomeIcon icon="linkedin"/></a>
            </div>);
    }
}

// /@fortawesome/react-fontawesome