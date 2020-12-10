import React from 'react';

import './banner.css'

function Banner() {
    return (
        <div>
            <section id="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <p className="name-title">Trishnangshu Goswami</p>
                            <p className="name-para">Self taught programmer, teaching myself software development and computer security. Trying to document my learning process through my blogs.<br /> <em>"A combination of me and my passion." </em> </p>
                        </div>
                        <div className='col-sm-12'>
                            <div className='items-2'>
                                <a href="https://github.com/tsgoswami" rel="noopener noreferrer" target="_blank" title="GitHub.com"><img src={process.env.PUBLIC_URL + 'assets/icons/github.svg'} alt='Github' /></a>
                                <a href="https://www.linkedin.com/in/trishnangshu-goswami-8910/" rel="noopener noreferrer" target="_blank" title="Linkedin"><img src={process.env.PUBLIC_URL + 'assets/icons/linkedin.svg'} alt='Linkedin' /></a>
                                <a href="https://www.reddit.com/user/Err3r_4o4" rel="noopener noreferrer" target="_blank" title="Reddit"><img src={process.env.PUBLIC_URL + 'assets/icons/reddit.svg'} alt='Reddit' /></a>
                                <a href="https://discord.gg/zQ83yR" rel="noopener noreferrer" target="_blank" title="Discord"><img src={process.env.PUBLIC_URL + 'assets/icons/discord.svg'} alt='Discord' /></a>
                                <a href="https://twitter.com/Err3r_4o4" rel="noopener noreferrer" target="_blank" title="Twitter"><img src={process.env.PUBLIC_URL + 'assets/icons/twitter.svg'} alt='Twitter' /></a>
                                <a href="https://www.facebook.com/trishnangshu.goswami/" rel="noopener noreferrer" target="_blank" title="Facebook"><img src={process.env.PUBLIC_URL + 'assets/icons/facebook.svg'} alt='Facebook' /></a>
                                <a href="https://www.instagram.com/Err3r_4o4/" rel="noopener noreferrer" target="_blank" title="Instagram"><img src={process.env.PUBLIC_URL + 'assets/icons/instagram.svg'} alt='Instagram' /></a>
                                <img src={process.env.PUBLIC_URL + 'assets/icons/contact.svg'} alt='Contact Me' />
                            </div>
                        </div>
                        

                    </div>
                </div>
            </section>
        </div>
    )
}
export default Banner;