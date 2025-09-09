import { NavLink } from 'react-router-dom';

export const NavBar = () =>{
    return (
        <div className = "flex h-15 justify-end shadow-lg shadow-black/10">
        <ul className = "flex items-center font-mono text-lg font-bold">
            <NavLink to="/" className = "navLink">Home</NavLink>
            <NavLink to="/projects" className = "navLink">Projects</NavLink>
            <NavLink to="/experience" className = "navLink">Experience</NavLink>
            <NavLink to="/skills" className = "navLink">Skills</NavLink>
            <li className = "navLink">Contact</li>
        </ul>
        </div>
    )
}

export default NavBar;