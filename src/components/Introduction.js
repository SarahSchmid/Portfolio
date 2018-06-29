import React from 'react';
import '../styles/Introduction.css';
import '../App.css';

const Introduction = () => {
    return(
        <div id="About">
            <div className="topicHeader">ABOUT</div>
            <h1 className="headline">
                Sarah Schmid - passionate engineer & CleanCode enthusiast
            </h1>
            <div>
                <div className="description">
                    <p>I'm a full stack engineer, with a passion for front end. I'm fluent in Java,
                        Groovy and JavaScript and quite competent in frameworks and technologies like Grails, Spring,
                        React, Docker and Git. I love getting the opportunity to learn and create new things almost every
                        day and I'm sure that I'll do it for the rest of my life.</p>

                    <p>I was born and raised in Hamburg. My parents were both hotel managers.
                        In fact it was pretty clear that I had to try it. So I started an apprenticeship as a hotel
                        specialist, but I realized soon that it's not the kind of job I want to do. I wanted something
                        creative. I stumbled through some jobs over a few years, not knowing what I want to do but a
                        lucky coincidence happened as I ran into the booth of the SAE Institute on a convention. Two
                        months later I studied Games Programming at the SAE Institute, followed by an apprenticeship as
                        IT-Specialist for Software Development. I immediately knew that coding was my passion.
                    </p>
                    <p>I'm also a passionate traveler, paintball player and singer. So if you don't mind that I'll start
                        singing every once in a while, I could be a good fit for your team ;)
                    </p>
                    <a href="mailto:sarah@schmid.hamburg?Subject=Hello%20there!" target="_top">Let me know if you're interested!</a>


                </div>
            </div>
        </div>
    );
};

export default Introduction;