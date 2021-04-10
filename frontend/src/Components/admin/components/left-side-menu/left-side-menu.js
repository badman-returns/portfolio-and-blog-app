import React from 'react'
import {Link} from 'react-router-dom'
import './left-side-menu.css'

const LeftSideMenu = () => {
    return(
        <div>
            <ul className="sidenav">
                <Link to={'/admin/dashboard/blogs'} className='list'>Blog Management</Link>
            </ul>
        </div>
    )
}

export default LeftSideMenu