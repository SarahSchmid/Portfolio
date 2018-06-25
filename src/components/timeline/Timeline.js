import React, {Component} from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faFilePdf} from '@fortawesome/fontawesome-free-regular';
import HorizontalTimeline from 'react-horizontal-timeline';
import SwipeableViews from 'react-swipeable-views';
import '../../styles/Timeline.css';
import '../../App.css';
import {TimelineItem} from "./TimelineItem";
import CVData from "./content";

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
                                            values={
                                                CVData.map(dates => dates.date)
                                            }
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