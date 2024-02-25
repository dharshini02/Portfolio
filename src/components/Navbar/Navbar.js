import React from 'react'
import './Navbar.css';

import {Link} from 'react-scroll'
const Navbar=()=>{
    return(
        
            <nav className='navbar'>
            
                <div className='Menus'>
                 <Link  activeClass='active' to='intro' spy={true} offset={-50} duration={500} className="itemList">Home</Link>
                 <Link activeClass='active' to='skills' spy={true} offset={-50} duration={500} className="itemList">About</Link>
                 <Link activeClass='active' to='projects' spy={true} offset={-50} duration={500} className="itemList">Projects</Link>
                 <Link activeClass='active' to='contact' spy={true} offset={-50} duration={500} className="itemList">Contact</Link>
                </div>
            </nav>
        
    )
}
export default Navbar;