import React from 'react';

import './indexbio.css'

function Description() {
    return (
        <div className='black'>
            <section id='bio'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <p className="about-title">Brief about myself</p>
                            <ColoredLine color="white" />
                            <p className="about-para">From childhood since I was able to operate computers, it was fasinating for me to learn and work in technology. Studying computer science and growing forward in this stack is always been my dream. So I self taught myself computer programming and also developed my technical skills by studying and researching over the internet. Although I was not a fond of traditional academics but that didn't let me stop from pursing my dream. Currently I am focusing on software development and computer security but its not the end, there is lot more  advanced fields that I want to pursue like Game Development, Automation, Blockchain and a lot.
                        </p>
                            <p className='about-para'><em>So I thought why not build a website so that I can share and document my learnings with you guys as it can also help newcomers,enthusiast and it would be a great way to help the tech community.</em> </p>
                            <ColoredLine color="white" />
                        </div>

                    </div>
                </div>

            </section>
        </div>
    )
}

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 1
        }}
    />
);

export default Description;