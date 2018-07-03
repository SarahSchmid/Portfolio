import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const target = "_blank";


const ContactLinks = (props) => {
    return(
        <a className="contactLink" target={target} href={props.url}>
            <p><FontAwesomeIcon icon={props.icon}/> {props.title}</p>
        </a>
    );
};

export default ContactLinks;