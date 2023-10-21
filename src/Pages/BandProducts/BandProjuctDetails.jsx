import { useLoaderData,  } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "../Shared/Navbar/NAvbar";

const BandProjuctDetails = () => {
  const productsDetails = useLoaderData();
  console.log(productsDetails);
    const handleLogDetails = () => {
        console.log(productsDetails);
        fetch(`https://my-assignment-10-server-8gfrfphd9-kazirauf.vercel.app/cartProducts`, {
          method: 'POST',
          headers: {
             'content-type': 'application/json'
          },
          body: JSON.stringify(productsDetails)
       })
       .then(res => res.json())
       .then(data => {
         console.log(data);
         if(data.insertedId) {
           Swal.fire({
             title: 'success!',
             text: 'product add in the cart successfully',
             icon: 'success',
             confirmButtonText: 'Done'
           })
         }
       })
    }

    return (
      <div>
        <Navbar></Navbar>
          <div className="lg:h-[800px]">
            <h1 className="text-center text-4xl mt-10 mb-10">Details Page</h1>
            <div className="card lg:card-side  shadow-xl  my-10 mx-10 border border-emerald-400">
                <figure><img className="h-[300px] w-[800px]" src={productsDetails.image_url} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-xl">{productsDetails.name}</h2>
                    <p className="lg:text-lg font-bold">Brand: {productsDetails.band_name}</p>
                    <p className="lg:text-lg font-bold">Price $ {productsDetails.Price}</p>
                    <p className="lg:text-lg font-bold">Type: {productsDetails.types}</p>
                    <p className="lg:text-lg font-bold">Rating: {productsDetails.rating}</p>
                    <p>{productsDetails.details}</p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-emerald-500 text-white font-bold" onClick={handleLogDetails}>Add To Cart</button>
                        
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
};

export default BandProjuctDetails;