import { useLoaderData,  } from "react-router-dom";

const BandProjuctDetails = () => {
    const productsDetails = useLoaderData();
   console.log(productsDetails);
    
    
    return (
        <div className="lg:h-[800px]">
            <h1 className="text-center text-4xl mt-10 mb-10">Details Page</h1>
           <div className="card lg:card-side  shadow-xl  my-10 mx-10 border border-emerald-400">
  <figure><img className="h-[300px] w-[800px]" src={productsDetails.image_url} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title text-xl">{productsDetails.name}</h2>
    <p className="lg:text-lg font-bold">Band: {productsDetails.band_name}</p>
    <p className="lg:text-lg font-bold">Price ${productsDetails.Price}</p>
    <p className="lg:text-lg font-bold">Type: {productsDetails.type}</p>
    <p className="lg:text-lg font-bold">Rating: {productsDetails.rating}</p>
    <p>{productsDetails.details}</p>
    <div className="card-actions justify-end">
      <button className="btn bg-emerald-500 text-white font-bold">Go Back</button>
    </div>
  </div>
</div>
        
        </div>
    );
};

export default BandProjuctDetails;