import React, {Component} from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faFilePdf} from '@fortawesome/fontawesome-free-regular';
import HorizontalTimeline from 'react-horizontal-timeline';
import SwipeableViews from 'react-swipeable-views';
import '../../styles/Timeline.css';
import '../../App.css';
import {TimelineItem} from "./TimelineItem";
import CVData from "./content";

const dates = [ '07/01/2007',
                '09/01/2007',
                '08/01/2008',
                '09/01/2011',
                '01/01/2012',
                '10/01/2013',
                '02/01/2014',
                '08/01/2015',
                '04/13/2016',
                '07/12/2016',
                '06/01/2017',
                '09/01/2017',
                '04/15/2018'];

export class Timeline extends Component{
    constructor(props){
     super(props);
     this.state = {value: 0, previous: 0, eventName:""};

    }

    render(){

        return (
            <div id="Timeline">
                <div className="topicHeader">TIMELINE</div>
                <div className="timeline">
                    <div className="dates">
                        <HorizontalTimeline index={this.state.value}
                                            indexClick={(index) => {
                                                this.setState({ value: index, previous: this.state.value });
                                            }}
                                            values={ dates }
                                            styles={{
                                                background: '#f8f8f8',
                                                foreground: '#129198',
                                                outline: '#dfdfdf' }}
                                            minEventPadding={20}
                                            maxEventPadding={220}/>
                    </div>
                    <div className="text-center">
                        <SwipeableViews
                            index={this.state.value}
                            onChangeIndex={(value, previous) => {
                                this.setState({ value: value, previous: previous });}}
                            resistance>
                            {CVData.map(data => (
                                <TimelineItem data={data}/>
                            ))}
                        </SwipeableViews>
                    <div className="download">
                        <a className="downloadButton" target="_blank" rel="noopener noreferrer" href="https://www.downloadcv.de">
                            <FontAwesomeIcon icon={faFilePdf}/> Resume</a>
                    </div>
                    </div>
                </div>
            </div>
        );
    }

}