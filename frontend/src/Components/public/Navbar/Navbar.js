import React from 'react';
import { Link } from "react-router-dom";
import './navbar.css'
function Navbar() {
    return (
       
            <div>
                <section id='nav-bar'>
                    <nav className='navbar navbar-expand-lg fixed-top'>
                    
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fa fa-bars" aria-hidden="true" />
                        </button>
                       

                        <div className='collapse navbar-collapse' id='navbarNav'>
                            <ul className='navbar-nav m-auto'>
                                <li className='nav-item'>
                                    <Link to='/' className='nav-link'>Home</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to='/about' className='nav-link'>About<span /></Link>
                                </li>
                           
                            
                                <li className='nav-item'>
                                    <Link to='/blogs' className='nav-link'>Blog<span /></Link>
                                </li>
                        
                            
                          
                                <li className='nav-item'>
                                    <Link to='/softwares' className='nav-link'>Softwares<span /></Link>
                                    </li>
                        
                            
                                <li className='nav-item'>
                                    <Link to='/contact' className='nav-link'>Contact<span />
                                    </Link>
                                </li>
                            </ul>

                        </div>
                    </nav>
                </section>
            </div>
       
    )

}
export default Navbar;