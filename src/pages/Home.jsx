import { useLoaderData } from "react-router-dom";
import Sliders from "../components/slider/Sliders";
import Cards from "../components/Cards";


const Home = () => {
    const estatecard =useLoaderData();
    console.log(estatecard);
    return (
        <div>
            <div className="container mx-auto ">
                <Sliders></Sliders>
            </div>
            <div className="container mx-auto my-5">
                <h1 className="text-2xl font-bold text-center my-3">Residential House</h1>
                <p className="text-center ">Residential housing is often the largest and most important financial investment a person makes in their lifetime. </p>
                <p className="text-center ">Its value is determined by many factors, including size and location, and is subject to shifts in the market. </p>
            </div>
            <div className="container mx-auto my-3">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 ">
                    {
                        estatecard.map((cards)=>(<Cards key={cards.id} cards={cards}></Cards>))
                    }
                </div>

            </div>
        </div>
    );
};

export default Home;