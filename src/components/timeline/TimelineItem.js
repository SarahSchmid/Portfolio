import React, {Component} from 'react';

export class TimelineItem extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div key={this.props.data}>
                <h2 className="timelineTitle">{this.props.data.title}</h2>
                <i className="timelineSubtitle">{this.props.data.subtitle}</i>
                <p className="timelineDate">{this.props.data.fullDate}</p>
                <div className="foobar">
                    <p className="timelineDescription">{this.props.data.description}</p>
                </div>
            </div>
        )
    }
}