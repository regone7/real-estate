import { TbBuildingCommunity } from "react-icons/tb";

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-4 bg-blue-300 text-base-content">
                <aside>
                    <div className="flex  justify-center items-center ">
                        <TbBuildingCommunity className="  text-2xl font-bold text-purple-700" />
                        <a className="btn btn-ghost text-xl font-bold bg-gradient-to-r from-purple-500 via-green-500 to-green-500 text-transparent bg-clip-text">CozyNook</a>
                    </div>
                    <div className="grid grid-cols-1 space-y-3">
                        <div>
                            <h1 className="font-semibold">Services</h1>
                            <div className="flex gap-3">
                                <p>Branding</p>
                                <p>Design</p>
                                <p>Marketing</p>
                                <p>Advertisement</p>
                            </div>
                        </div>
                        <div>
                            <h1 className="font-semibold">Legal</h1>
                            <div className="flex gap-3">
                                <p>Terms of use</p>
                                <p>Privacy policy</p>
                                <p>Cookie policy</p>
                            </div>
                        </div>

                    </div>
                    <p className="mt-5  w-full bg-sky-500 rounded-full px-3">Copyright © 2024 - All right reserved by Regone</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;