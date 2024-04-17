import { Link, NavLink } from "react-router-dom";
import { TbBuildingCommunity } from "react-icons/tb";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext)
    const links = <>
        <div className="  flex flex-col md:flex-row items-center justify-center gap-3">
            <NavLink to='/' className={({ isActive }) => isActive ? 'text-accent font-bold bg-white border-b-4 border-green-300  w-12 h-9 flex justify-center items-center' : 'font-bold w-12 h-9 flex justify-center items-center'}>Home</NavLink>
            {
                user && <>
                    <NavLink to='/profile' className={({ isActive }) => isActive ? 'text-accent font-bold bg-white border-b-4 border-green-300  w-12 h-9 flex justify-center items-center' : 'font-bold w-12 h-9 flex justify-center items-center'}> Profile</NavLink>
                    <NavLink to='/updateprofile' className={({ isActive }) => isActive ? 'text-accent font-bold bg-white border-b-4 border-green-300  w-24 h-9 flex justify-center items-center' : 'font-bold w-24 h-9 flex justify-center items-center'}>Update Profile</NavLink>
                    <NavLink to='/more' className={({ isActive }) => isActive ? 'text-accent font-bold bg-white border-b-4 border-green-300  w-24 h-9 flex justify-center items-center' : 'font-bold w-24 h-9 flex justify-center items-center'}> More Service</NavLink>
                    <NavLink to='/contact' className={({ isActive }) => isActive ? 'text-accent font-bold bg-white border-b-4 border-green-300  w-20 h-9 flex justify-center items-center' : 'font-bold w-20 h-9 flex justify-center items-center'}> Contact Us</NavLink>
                </>
            }
        </div>
    </>
    const handelLogout = () => {
        signOutUser()
            .then(() => { 
                toast.success("Succesfully logout")
             })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div >
            <div className="container mx-auto"  >
                <div className="navbar ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden md:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52">
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
                    <div className="navbar-center hidden lg:flex md:flex">
                        <ul className="menu menu-horizontal px-1">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <div className="navbar-end">

                        {
                            user ? (<><div className="flex gap-3">
                                <div className="tooltip  z-[10] hover:tooltip-bottom " data-tip={user?.displayName || "Name Not Found"} >
                                    <button className="btn btn-sm btn-circle"><img className="rounded-full w-full h-full" src={user?.photoURL || 'https://i.ibb.co/vwWq42z/pexels-pixabay-162137.jpg'} alt="" /></button>
                                </div>
                                <div><button onClick={handelLogout} className="btn btn-sm bg-lime-300 hover:bg-lime-500">Log out</button></div>
                            </div></>) : (<><Link to='/login'><button className="btn btn-sm bg-cyan-300 hover:bg-cyan-200">Log In</button></Link></>
                            )
                        }
                    </div>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Navbar;