import { Link } from "react-router-dom";


const RegisterPg = () => {
    const handelRegisterPg = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

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
                                    <input type="text" placeholder="name" className="input input-bordered" required />
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
                                    <input type="text" placeholder="photoURL" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" value="Register" className="btn  bg-orange-300 hover:bg-orange-400" />
                                </div>
                            </form>

                        </div>
                        <div className="flex items-center justify-end px-9 mb-7">

                            <Link to='/login'><button className="btn btn-sm border-b-2 border-green-300 hover:bg-cyan-300">Log In</button></Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPg;