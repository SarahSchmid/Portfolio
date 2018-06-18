import React, {Component} from 'react';
import '../../styles/Projects.css';
import '../../App.css';

const target = "_blank";

export class Project extends Component{
    render(){
        return (
            <div className="item">
                <img src={this.props.imgSrc} alt="Project" className="image"/>
                <div className="overlay">
                    <div className="projectDescription">
                        <h1>{this.props.title}</h1>
                        <p>{this.props.description}</p>
                        <p><a target={target} href={this.props.repoUrl}>Click here for the repository</a></p>
                        <p><a target={target} href={this.props.appUrl}>Click here for the application</a></p>
                    </div>
                </div>

            </div>

        );
    }


}