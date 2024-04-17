import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaGithub } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";
import { IoMdEye } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";

const LogInPg = () => {
    const { signInUsers, googleLogin, githubLogin,setLoading } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const [showPasswords, setShowPasswords] = useState(false)

    const handelLoginPg = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInUsers(email, password)
            .then(result => {
                console.log(result.user)
                toast.success("Succesfully login")
                e.target.reset()
                setTimeout(() => {
                    navigate(location?.state ? location.state : '/');
                }, 1500);
                setLoading(false)
            })
            .catch(error => {
                console.error(error)
                toast.error("Invalid try again")
            })
    }
    const handelgoogleLogin = () => {
        googleLogin()
            .then((result) => {
                console.log(result.user)
                toast.success("Succesfully login")
                setTimeout(() => {
                    navigate(location?.state ? location.state : '/');
                }, 1500);
               

            })
            .catch(error => {
                console.error(error)

            })
    }

    const handelGithublogin = () => {
        githubLogin()
            .then((result) => {
                console.log(result.user)
                toast.success("Succesfully login")
                setTimeout(() => {
                    navigate(location?.state ? location.state : '/');
                }, 1500);

            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div>
            <Helmet>
                <title>CozyNook || Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content ">
                    <div className="card shrink-0 lg:w-[450px]  md:w-[350px] shadow-2xl ">
                        <h1 className="text-3xl text-center pt-5 font-bold">Log In Now!</h1>
                        <div className="card-body">
                            <form onSubmit={handelLoginPg}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <div>
                                        <input type={showPasswords ? "text" : "password"} name="password" placeholder="password" className="input input-bordered relative w-full" required />
                                        <span className="absolute -ml-9 mt-4" onClick={() => { setShowPasswords(!showPasswords) }}>
                                            {
                                                showPasswords ? <IoMdEye /> : <FaRegEyeSlash />
                                            }
                                        </span>
                                    </div>
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" value="LogIn" className="btn  bg-orange-300 hover:bg-orange-400" />
                                </div>

                            </form>
                        </div>

                        <div className="flex items-center justify-between px-9">
                            <h1>New User?  </h1>
                            <Link to='/register'><button className="btn btn-sm border-b-2 border-green-300 hover:bg-cyan-300">Registration now...</button></Link>
                        </div>

                        <div className="divider divider-gray-100 px-9">OR Login With </div>
                        <div className="px-9 flex flex-col w-full gap-3 mb-12">
                            <button onClick={handelgoogleLogin} className="btn btn-outline btn-info "><FcGoogle className="text-3xl" /> Google</button>
                            <button onClick={handelGithublogin} className="btn btn-outline btn-info "><FaGithub className="text-3xl text-black" />  Github</button>
                        </div>

                    </div>
                </div>
                <ToastContainer />
            </div>
            
        </div>
    );
};

export default LogInPg;