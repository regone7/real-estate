import { SiReacthookform } from "react-icons/si";
import { GiPriceTag } from "react-icons/gi";
import { MdOutlineLocationOn } from "react-icons/md";

const Cards = ({ cards }) => {
    const { estate_title, segment_name, description, price, status, area, location, facilities, image } = cards;
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl lg:h-[450px] md:h-[450px]">
                <figure><img className="h-[220px] w-full" src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{estate_title}</h2>
                    <p>{segment_name}</p>
                    <div className="flex justify-between items-center ">
                        <div className="flex items-center  space-x-1">
                            <GiPriceTag />
                            <h1 className="font-bold "><span>Price:</span> {price}</h1>
                        </div>
                        <div className="flex items-center  space-x-1">
                            <SiReacthookform />
                            <h1 className="font-bold text-green-300"><span className="text-black">Status:</span> {status}</h1>
                        </div>
                    </div>
                    <div className="flex items-center  space-x-2 font-semibold ">
                        <MdOutlineLocationOn />
                        <h1><span>Location:</span>{location}</h1>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-sm btn-info hover:bg-gradient-to-r from-orange-300 to-purple-400 ">View Property</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;