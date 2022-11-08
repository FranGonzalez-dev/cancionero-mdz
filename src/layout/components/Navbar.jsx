
import { Link, NavLink } from 'react-router-dom';
import img from '../../../assets/logo-caf-2021.svg'


export const Navbar = () =>  {
    return (
        <nav className="navbar navbar-expand navbar-dark container px-4 py-2">

        <Link className="navbar-brand" to="/">
            <img src={img} alt="" />
        </Link>

        <div className="navbar-collapse">
            <div className="navbar-nav">
                <NavLink
                    className={({ isActive }) => isActive ? 'nav-item nav-link active' : 'nav-item nav-link'}
                    to='/alabanzas'
                >
                    Alabanzas
                </NavLink>
                <NavLink
                    className={({ isActive }) => isActive ? 'nav-item nav-link active' : 'nav-item nav-link'}
                    to='/adoraciones'
                >
                    Adoraciones
                </NavLink>
            </div>
        </div>

    </nav>
)}
    
    
