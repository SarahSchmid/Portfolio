import React, {Component} from 'react';
import HorizontalTimeline from 'react-horizontal-timeline';
import SwipeableViews from 'react-swipeable-views';
import TimelineItem from "./TimelineItem";
import ResumeDownload from "./ResumeDownload";
import CVData from "./CVItems";
import '../../styles/Timeline.css';
import '../../App.css';

export class Timeline extends Component{
    constructor(props){
     super(props);
     this.state = {value: 0, previous: 0, eventName:""};

    }

    render(){

        return (
            <div id="Timeline">
                <div className="topicHeader">TIMELINE</div>
                <div className="timelineArea">
                    <div className="timeline">
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
                    <div className="swipeableView">
                        <SwipeableViews
                            index={this.state.value}
                            onChangeIndex={(value, previous) => {
                                this.setState({ value: value, previous: previous });}}
                            resistance>
                            {CVData.map(data => (
                                <TimelineItem data={data}/>
                            ))}
                        </SwipeableViews>
                    </div>
                    <ResumeDownload/>
                </div>
            </div>
        );
    }

}