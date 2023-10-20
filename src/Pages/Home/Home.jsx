import { Link, useLoaderData } from "react-router-dom";
import OutTechnology from "../OutTechnology/OutTechnology";
import Banner from "./Banner";
import OurService from "./OurService";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Home = () => {
    const bands = useLoaderData();
  
    console.log(bands);
    return (
        <div>
           <Banner></Banner>
           <div className="grid lg:grid-cols-3 gap-10 mt-20">
            {
             
                bands.map(band => <div key={band.id}>  <Link to={`/bands/${band.name}`}>
                <div className="card card-side shadow-x bg-slate-900 text-emerald-500">
                  <figure className="border-emerald-500 border-2">
                    <img className="lg:w-60 h-40" src={band.image} alt="Band" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{band.name}</h2>
                  </div>
                </div>
              </Link></div>)
            }
           </div>
           <OutTechnology></OutTechnology>
           <h1 className="text-4xl font-bold text-center mb-10 mt-10">Our Technological Festival</h1>
           <OurService></OurService>
           <ToastContainer/>
        </div>

    );
};

export default Home;