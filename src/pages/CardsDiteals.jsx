
import { useLoaderData, useParams } from 'react-router-dom';
import { GiPriceTag } from "react-icons/gi";
import { MdOutlineLocationOn } from "react-icons/md";
import { GiSpookyHouse } from "react-icons/gi";
import { Helmet } from 'react-helmet-async';

const CardsDiteals = () => {
    const estate = useLoaderData()
    const { id } = useParams()
    const estates = parseInt(id)
    const editels = estate.find(singleestate => singleestate.id === estates)
    console.log(editels)
    const { estate_title, segment_name, description, price, status, area, location, facilities, image } = editels;
    return (
        <div className='h-full'>
            <Helmet>
                <title>CozyNook || Details </title>
            </Helmet>
            <div className='md:my-7' >
                <h1 className='font-bold text-center text-3xl '>Details</h1>
                <p className='text-center'>Residential properties can vary widely, from single-family homes to townhouses, apartments, student
                    housing, senior living communities, vacation rentals and luxury estates. Each type offers different features and ownership structures.</p>
            </div>
            <div>
            <img data-aos="flip-down" data-aos-duration="3000" src={image} alt="" className=" hidden md:flex md:w-5/6  md:mx-auto  md:bg-gray-500 md:rounded-lg md:shadow-md md:-mb-12" />
            </div>
            <section>
                <div className="bg-violet-200 md:h-[500px]">
                    <div className="container flex flex-col items-center px-4 py-9 pb-24 mx-auto text-center lg:pb-56 md:py-24 md:px-32 lg:px-32 text-gray-900">
                        <h1 className="text-2xl font-bold leading-none sm:text-2xl xl:max-w-3xl text-gray-900">{estate_title}</h1>
                        <p className="mt-4 mb-2 text-lg sm:mb-7 md:mb-3 xl:max-w-3xl text-gray-900">{segment_name}</p>
                        <p>{description}</p>
                        <div className='px-2 py-2 '>
                            <h1 className='font-bold text-purple-700  border-2 border-yellow-500 rounded-md px-2'>{status}</h1>
                        </div>
                        <div className="flex items-center  space-x-1 ">
                            <GiPriceTag />
                            <h1 className="font-bold text-red-500"> <span className='font-bold text-black'>Price:</span> {price}</h1>
                        </div>
                        <div className="flex items-center  space-x-1">
                            <GiSpookyHouse />
                            <h1 className="font-semibold text-gray-500"><span className="text-black">Area:</span> {area}</h1>
                        </div>
                        <div className="flex items-center  space-x-1 font-semibold ">
                            <MdOutlineLocationOn />
                            <h1><span className='font-semibold text-black'>Location:</span> {location}</h1>
                        </div>


                        <div className="flex flex-wrap justify-center gap-3 my-3">
                            <p className='border-4 border-gray-100 rounded-md p-1 px-3 '>{facilities[0]}</p>
                            <p className='border-4 border-gray-100 rounded-md p-1 px-3'>{facilities[1]}</p>
                            <p className='border-4 border-gray-100 rounded-md p-1 px-3'>{facilities[2]}</p>
                        </div>
                    </div>
                </div>
                <img src={image} alt="" className="w-5/6  mx-auto mb-12 -mt-20 bg-gray-500 rounded-lg shadow-md lg:-mt-48 md:-mt-32 md:hidden" />
            </section>
        </div>
    );
};

export default CardsDiteals;