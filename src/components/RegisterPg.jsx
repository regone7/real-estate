import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaRegEyeSlash } from "react-icons/fa6";
import { IoMdEye } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterPg = () => {
    const { creatUser, updateUserProfile } = useContext(AuthContext)
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate();

    const handelRegisterPg = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photoURL = e.target.photoURL.value;
        const password = e.target.password.value;
        console.log(email, password)

        if (password.length < 6) {
            setError("Password must be at least 6 character")
            return;
        }
        if (!/(?=.*[A-Z])/.test(password)) {
            setError("Password Must have One Uppercase letter in the password")
            return;
        }
        if (!/(?=.*[a-z])/.test(password)) {
            setError("Password Must have One Lowercase letter in the password")
            return;
        }
        setError('')

        creatUser(email, password)
            .then(() => {
                updateUserProfile(name, photoURL)
                    .then(() => {
                        toast.success("Succesfully")
                        setTimeout(()=>{
                            navigate('/');
                        }, 1500);
                        
                    })

            })
            .catch((error) => {
                console.error(error)
                toast.error("Invalid ")
            })

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content ">
                    <div className="card shrink-0 lg:w-[450px]  md:w-[350px] shadow-2xl ">
                        <h1 className="text-3xl text-center pt-5 font-bold text-orange-500">Register Now!</h1>
                        <div className="card-body">
                            <form onSubmit={handelRegisterPg}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">PhotoURL</span>
                                    </label>
                                    <input type="text" placeholder="photoURL" name="photoURL" className="input input-bordered" required />
                                </div>
                                <div className="form-control">

                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <div>
                                        <input type={showPassword ? "text" : "password"} name="password" placeholder="password" className="input input-bordered relative w-full" required />
                                        <span className="absolute -ml-9 mt-4" onClick={() => { setShowPassword(!showPassword) }}>
                                            {
                                                showPassword ? <IoMdEye /> : <FaRegEyeSlash />
                                            }
                                        </span>
                                    </div>
                                    


                                    {
                                        error && <small className="text-red-500">{error}</small>
                                    }
                                </div>
                                <div className="form-control ">
                                    <input type="submit" value="Register" className="btn  bg-orange-300 mt-5 hover:bg-orange-400" />
                                </div>
                            </form>

                        </div>
                        <div className="flex items-center justify-end px-9 mb-7">

                            <Link to='/login'><button className="btn btn-sm border-b-2 border-green-300 hover:bg-cyan-300">Log In</button></Link>
                        </div>

                    </div>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default RegisterPg;