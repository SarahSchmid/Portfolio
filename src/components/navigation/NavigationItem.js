import React from 'react';

const NavigationItem = (props) => {
    return(
        <li className={props.class}><a className="link" href={props.anchor}>{props.title}</a></li>
    );
};

export default NavigationItem;