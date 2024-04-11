import { NavLink } from "react-router-dom";
import { TbBuildingCommunity } from "react-icons/tb";

const links = <>
    <div className="  flex flex-col md:flex-row items-center justify-center gap-3">
        <NavLink to='/' className={({ isActive }) => isActive ? 'text-accent font-bold bg-white border-b-4 border-green-300  w-16 h-9 flex justify-center items-center' : 'font-bold w-16 h-9 flex justify-center items-center'}>Home</NavLink>
    </div>
</>

const Navbar = () => {
    return (
        <div >
            <div className="container mx-auto"  >
                <div className="navbar ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {
                                    links
                                }
                            </ul>
                        </div>
                        <div className="flex  justify-center items-center">
                            <TbBuildingCommunity className=" hidden lg:flex lg:text-2xl lg:font-bold lg:text-purple-700" />
                            <a className="btn btn-ghost text-xl font-bold bg-gradient-to-r from-purple-500 via-green-500 to-green-500 text-transparent bg-clip-text">CozyNook</a>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <a className="btn">Log In</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;