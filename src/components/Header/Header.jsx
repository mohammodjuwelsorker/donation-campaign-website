import { NavLink } from "react-router-dom"
import './Header.css'

const Header = () => {
    const links = <>
        <NavLink className="text-lg font-bold capitalize" to="/">Home</NavLink>
        <NavLink className="text-lg font-bold capitalize" to="/donation">Donation</NavLink>
        <NavLink className="text-lg font-bold capitalize" to="/statistics">Statistics</NavLink>
    </>

    return (
        <div className="navbar max-w-screen-xl mx-auto  z-40">
            <div className="flex-1">
                <a><img src="/src/assets/Logo.png" /></a>
            </div>
            <div className="flex gap-8 items-center">
                {links}
            </div>
        </div>
    );
};

export default Header;