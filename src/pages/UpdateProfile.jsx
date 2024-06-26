import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";


const UpdateProfile = () => {
    const {  updateUserProfile, setLoading } = useContext(AuthContext)
    const handelUpdate = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoURL = e.target.photoURL.value;

        updateUserProfile(name, photoURL)
            .then(() => {
                setLoading(false)
                console.log("success");
                setTimeout(()=>{
                    toast.success("Succesfully Update", {
                        autoClose: 3000, 
                      })
                }, 1500);
            })
            .catch((error) => {
                console.error(error)
            })
    }
    return (
        <div>
            <Helmet>
                <title>CozyNook || Update Profile</title>
            </Helmet>
            <div className="container mx-auto">
                <div className="hero min-h-screen ">
                    <div className="hero-content flex">

                        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <h1 className="text-2xl text-center text-sky-500 mt-5">Update Profile</h1>
                            <form onSubmit={handelUpdate} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="name" name='name' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">PhotoURL</span>
                                    </label>
                                    <input type="text" placeholder="photoURL" name='photoURL' className="input input-bordered" />
                                </div>

                                <div className="form-control mt-6">
                                    <button className="btn bg-blue-600 hover:bg-blue-800 hover:text-white">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default UpdateProfile;