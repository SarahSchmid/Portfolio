import React, {Component} from 'react';
import '../../styles/Projects.css';
import '../../App.css';

const githubUrl = "https://github.com/SarahSchmid/Portfolio";
const target = "_blank";

export class Project extends Component{
    render(){
        return (
            <div>
                <div className="hexWrapper">
                    <div className="bigHex">
                        <a target={target} href={githubUrl}>Portfolio</a>
                    </div>
                </div>

            </div>

        );
    }


}