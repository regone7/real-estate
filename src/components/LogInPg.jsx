import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const LogInPg = () => {
    const { signInUsers } = useContext(AuthContext)
    const location=useLocation()
    const navigate = useNavigate()

    const handelLoginPg = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInUsers(email, password)
            .then(result => {
                console.log(result.user)
                console.log("succ")
                e.target.reset()
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error)
                console.log("erroe")
            })
    }
    return (
        <div>
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
                                    <input type="email" placeholder="email"  name="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" name="password" className="input input-bordered" required />
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
                            <button className="btn btn-outline btn-info "><FcGoogle className="text-3xl" /> Google</button>
                            <button className="btn btn-outline btn-info ">Accent</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogInPg;