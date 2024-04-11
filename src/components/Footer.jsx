import { TbBuildingCommunity } from "react-icons/tb";

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-4 bg-blue-300 text-base-content">
                <aside>
                    <div className="flex  justify-center items-center">
                        <TbBuildingCommunity className="  text-2xl font-bold text-purple-700" />
                        <a className="btn btn-ghost text-xl font-bold bg-gradient-to-r from-purple-500 via-green-500 to-green-500 text-transparent bg-clip-text">CozyNook</a>
                    </div>
                    <p>Copyright © 2024 - All right reserved by Regone</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;