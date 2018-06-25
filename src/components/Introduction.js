import React, {Component} from 'react';
import introductionPicture from '../images/introduction.jpg';
import '../styles/Introduction.css';
import '../App.css';

export class Introduction extends Component{
    render(){
        return(
            <div id="About">
                <div className="topicHeader">ABOUT</div>
                <h1 className="headline">
                    Sarah Schmid - passionate engineer & CleanCode enthusiast
                </h1>
                <div>

                <div className="picture">
                    <img src={introductionPicture} alt="Introduction"/>
                </div>
                <div className="description">
                    <strong>Lorem ipsum dolor sit amet</strong>, consectetur adipiscing elit. Maecenas porta congue lobortis. Nullam facilisis blandit egestas. Quisque at ultrices dolor. Sed interdum turpis euismod vulputate venenatis. Phasellus congue porta libero, et suscipit mauris tincidunt at. In sit amet mauris lacinia, fermentum tortor vitae, euismod quam. Mauris porta mollis ultricies. Etiam scelerisque massa ultricies metus sodales efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In et elit lacinia, convallis tortor ut, bibendum risus. Proin mauris lorem, faucibus eleifend diam non, varius facilisis augue.

                    Ut sed placerat lorem, semper lacinia leo. Praesent aliquam velit et scelerisque varius. Praesent varius gravida turpis ut fringilla. Pellentesque ut ligula felis. Morbi velit enim, consequat at gravida et, ornare eu erat. Quisque id euismod odio. Sed et mauris ac velit pharetra ultricies posuere nec est. Proin sit amet diam vitae sem venenatis fermentum ultrices sed lorem. Cras faucibus, magna sed luctus iaculis, nisi lorem fringilla sapien, vulputate feugiat turpis sapien id dolor. Donec venenatis velit nec erat commodo, ac facilisis magna condimentum. In eros nibh, mollis ut dignissim nec, dictum eget metus. Suspendisse potenti. Aliquam quis congue eros, fringilla porta lacus.

                    Morbi sit amet mauris sit amet ex suscipit venenatis. Nulla pulvinar sagittis ante, vel fringilla dui vehicula nec. Nullam ultrices ipsum urna, vel lobortis lacus condimentum vel. Mauris quis vestibulum urna. Praesent facilisis commodo laoreet. Integer congue turpis eu iaculis ullamcorper. Donec turpis odio, consectetur quis odio ut, accumsan tincidunt turpis. Sed nec placerat turpis. Donec a luctus libero, a cursus neque. Donec suscipit sit amet massa id volutpat. Etiam molestie neque rhoncus tellus blandit vehicula. Mauris augue quam, porttitor nec orci quis, fermentum vestibulum leo. In hac habitasse platea dictumst. Vivamus aliquet non libero sit amet porttitor. Curabitur sit amet nisi faucibus, tempus tortor a, molestie risus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                </div>
                </div>
            </div>
        );
    }
}