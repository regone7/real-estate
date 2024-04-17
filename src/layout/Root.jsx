import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();

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