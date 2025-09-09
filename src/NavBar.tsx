import { NavLink } from 'react-router-dom';

export const NavBar = () =>{
    return (
        <div className = "flex justify-end h-15 shadow-black/10 shadow-lg">
        <ul className = "font-mono flex items-center text-lg font-bold">
            <NavLink to="/" className = "navLink">Home</NavLink>
            <NavLink to="/projects" className = "navLink">Projects</NavLink>
            <NavLink to="/skills" className = "navLink">Skills</NavLink>
            <li className = "navLink">Contact</li>
        </ul>
        </div>
    )
}

export default NavBar;