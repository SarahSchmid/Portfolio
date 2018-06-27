import React, {Component} from 'react';
import HorizontalTimeline from 'react-horizontal-timeline';
import SwipeableViews from 'react-swipeable-views';
import ResumeInformations from "./ResumeInformations";
import ResumeDownload from "./ResumeDownload";
import CVData from "./CVItems";
import '../../styles/Resume.css';
import '../../App.css';

export class Resume extends Component{
    constructor(props){
     super(props);
     const dataLength = CVData.length - 1;
     this.state = {value: dataLength, previous: dataLength, eventName:""};

    }

    render(){

        return (
            <div id="Resume">
                <div className="topicHeader">RESUME</div>
                <div className="resume">
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
                                <ResumeInformations data={data}/>
                            ))}
                        </SwipeableViews>
                    </div>
                    <ResumeDownload/>
                </div>
            </div>
        );
    }

}