import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Root = () => {
    return (
        <div>
            <div>
                <div>
                    <Navbar></Navbar>
                </div>
                <div className="min-h-screen">
                    <Outlet></Outlet>
                </div>
                
                <Footer></Footer>
                
            </div>

        </div>
    );
};

export default Root;