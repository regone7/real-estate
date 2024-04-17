import { SiReacthookform } from "react-icons/si";
import { GiPriceTag } from "react-icons/gi";
import { MdOutlineLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

const Cards = ({ cards }) => {
    const { id, estate_title, segment_name, description, price, status, area, location, facilities, image } = cards;
    return (
        <div>
            <div data-aos="zoom-out-down" data-aos-duration="2000" className="card  bg-base-100 shadow-xl lg:h-[450px] md:h-[450px]">
                <figure><img className="h-[220px] w-full relative " src={image} alt="" /></figure>
                <div className="flex items-center  space-x-1 absolute ">
                    <h1 className="font-bold text-fuchsia-300 ml-5 "> {status}</h1>
                </div>
                <div className="card-body">
                    <h2 className="card-title">{estate_title}</h2>
                    <p>{segment_name}</p>
                    <div className="flex justify-between items-center ">
                        <div className="flex items-center  space-x-1 ">
                            <GiPriceTag />
                            <h1 className="font-bold text-red-500"> {price}</h1>
                        </div>
                        <div className="flex items-center  space-x-1 font-semibold ">
                            <MdOutlineLocationOn />
                            <h1>{location}</h1>
                        </div>
                    </div>
                    <div className="flex items-center  space-x-1">
                        <SiReacthookform />
                        <h1 className="font-bold text-green-300"><span className="text-black">Status:</span> {status}</h1>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/estatedtls/${id}`} ><button className="btn btn-sm btn-outline btn-primary border-b-2 border-purple-300 btn-info hover:bg-gradient-to-r from-orange-300 to-purple-400 ">View Property</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;