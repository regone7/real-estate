import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const Profiles = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="container mx-auto lg:w-[50%">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={user.photoURL} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-3xl font-bold text-center">{user?.displayName}</h1>
                        <p className="py-6">{user?.email}</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profiles;