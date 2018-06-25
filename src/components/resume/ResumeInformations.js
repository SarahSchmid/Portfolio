import React, {Component} from 'react';

class ResumeInformations extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div key={this.props.data}>
                <h2 className="resumeTitle">{this.props.data.title}</h2>
                <i>{this.props.data.subtitle}</i>
                <p className="resumeDate">{this.props.data.fullDate}</p>
                <div>
                    <p className="resumeDescription">{this.props.data.description}</p>
                </div>
            </div>
        )
    }
}

export default ResumeInformations;