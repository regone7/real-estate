import Sliders from "../components/slider/Sliders";


const Home = () => {
    return (
        <div>
            <div className="container mx-auto ">
                <Sliders></Sliders>
            </div>
            <div className="container mx-auto my-5">
                <h1 className="text-2xl font-bold text-center my-3">Residential House</h1>
                <p className="text-center ">Residential housing is often the largest and most important financial investment a person makes in their lifetime. Its value is determined by many factors, including size and location, and is subject to shifts in the market. </p>
            </div>
        </div>
    );
};

export default Home;