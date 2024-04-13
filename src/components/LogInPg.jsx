import { FcGoogle } from "react-icons/fc";

const LogInPg = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content ">
                    <div className="card shrink-0 lg:w-[450px]  md:w-[350px] shadow-2xl ">
                        <h1 className="text-3xl text-center pt-5 font-bold">Log In Now!</h1>
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn  bg-cyan-300 hover:bg-cyan-200">Login</button>
                            </div>
                            <div className="flex items-center justify-between py-7">
                                <h1>New User?  </h1>
                                <button className="btn btn-sm border-b-2 border-green-300 hover:bg-cyan-300">Registration now...</button>
                            </div>
                        </form>
                        <div className="-mt-9">
                            <div className="divider divider-gray-100 px-9">OR</div>
                            <div className="px-9 flex flex-col w-full gap-3 mb-12">
                                <button className="btn btn-outline btn-info "><FcGoogle className="text-3xl" /> Google</button>
                                <button className="btn btn-outline btn-info ">Accent</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogInPg;