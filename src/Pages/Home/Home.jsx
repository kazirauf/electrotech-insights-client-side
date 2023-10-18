import { useLoaderData } from "react-router-dom";
import OutTechnology from "../OutTechnology/OutTechnology";
import Banner from "./Banner";
import OurService from "./OurService";
import BandNames from "./BandNames";

const Home = () => {
    const bands = useLoaderData();
    console.log(bands);
    return (
        <div>
           <Banner></Banner>
           <div className="grid lg:grid-cols-3 gap-10 mt-20 px-20">
            {
                bands.map(band => <BandNames band={band} key={band.id}></BandNames>)
            }
           </div>
           <OutTechnology></OutTechnology>
           <h1 className="text-4xl font-bold text-center mb-10 mt-10">Our Technological Festival</h1>
           <OurService></OurService>
        </div>
    );
};

export default Home;