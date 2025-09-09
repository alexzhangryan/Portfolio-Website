import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Contact from './Contact';

export const NavBar = () =>{

    const [openContact, setOpenContact] = useState(false)

    return (
        <div className = "flex h-15 justify-end shadow-lg shadow-black/10">
        <ul className = "flex items-center font-mono text-lg font-bold">
            <NavLink to="/" className = "navLink">Home</NavLink>
            <NavLink to="/projects" className = "navLink">Projects</NavLink>
            <NavLink to="/experience" className = "navLink">Experience</NavLink>
            <NavLink to="/skills" className = "navLink">Skills</NavLink>
            <li className = "navLink" onClick={() => setOpenContact(true)}>Contact</li>
            
        </ul>
        {openContact ? <Contact onClose={() => setOpenContact(false)}/> : null}
        </div>
    )
}

export default NavBar;