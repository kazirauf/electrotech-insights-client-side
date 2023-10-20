import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProducts = () => {
    const product = useLoaderData()
    const { _id,  image_url, name, rating, Price, band_name, type, details} = product;
   console.log(_id);
    const handleUpdateProduct = (event) => {
        event.preventDefault()
          const form = event.target;
          const image_url = form.image.value;
          const name = form.name.value;
          const band_name = form.bandName.value;
          const types = form.types.value;
          const Price = form.price.value;
          const rating = form.rating.value;
          const details = form.description.value;
          const updateProduct = {image_url, name, band_name, types, Price, rating, details}
          
    
          fetch(`http://localhost:5000/addProducts/${_id}`, {
             method: 'PUT',
             headers: {
                'content-type': 'application/json'
             },
             body: JSON.stringify(updateProduct)
          })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if(data.modifiedCount > 0) {
              Swal.fire({
                title: 'success!',
                text: 'product update successfully',
                icon: 'success',
                confirmButtonText: 'OK'
              })
            }
          })
    
        }
      return (
        <div
          className=""
          style={{
            backgroundImage:
              "url(https://media.istockphoto.com/id/1226985345/photo/circuit-board-blue-computer-data-technology-artificial-intelligence.jpg?s=612x612&w=0&k=20&c=iFAc4sSD8GHGkZzxwS17AcBPl9a30M541SLNZVc9PMM=)", backgroundRepeat: "no-repeat", backgroundSize: "cover", 
          }}
        >
         <div className="hero-overlay bg-opacity-60  min-h-[800px] py-10">
         <h1 className="text-5xl font-bold text-emerald-500 text-center mt-10 mb-10">
            Update Product
          </h1>
          <form onSubmit={handleUpdateProduct} className="text-white">
            <div className="grid lg:grid-cols-2 gap-16 px-20">
              <div>
                <div>
                  <h3 className="font-bold text-xl mb-5">Image Link</h3>
                  <input
                    type="text"
                    defaultValue={image_url}
                    name="image"
                    placeholder="your product image url"
                    className="input input-bordered text-black input-accent w-full"
                    required
                  />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-5">Name</h3>
                  <input
                    type="text"
                    defaultValue={name}
                    name="name"
                    placeholder="your product name"
                    className="input input-bordered text-black input-accent w-full"
                    required
                  />
                </div>
                <label>
                    <h3 className="font-bold text-xl mb-5">
                    Brand Name
                    </h3>
                    <select
                      className="input input-bordered  input-accent w-full text-black"
                      name="bandName"
                      defaultValue={band_name}
                    >
                      <option value="Apple">Apple</option>
                      <option value="Google">Google</option>
                      <option value="Samsung">Samsung</option>
                      <option value="Intel">Intel</option>
                      <option value="Sony">Sony</option>
                      
                    </select>
                  </label>
             
              </div>
              <div>
                <div>
                  <label>
                    <h3 className="font-bold text-xl mb-5">
                      Select Your Product Types
                    </h3>
                    <select
                      className="input input-bordered  input-accent w-full text-black"
                      name="types"
                      defaultValue={type}
                    >
                      <option value="computer">Computer</option>
                      <option value="intel product">intel product</option>
                      <option value="Laptop">Laptop</option>
                      <option value="power electronics">power electronics</option>
                      <option value="intel processor">intel processor</option>
                      <option value="Real windows">Real windows</option>
                      <option value="intel motherboard">intel motherboard</option>
                      <option value="Sony tv">Sony tv</option>
                      <option value="phone">Phone</option>
                      <option value="Google product">Google product</option>
                      <option value="Headphones">Headphones</option>
                    </select>
                  </label>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-5">Price</h3>
                  <input
                    type="text"
                    name="price"
                    defaultValue={Price}
                    placeholder="your product price"
                    className="input input-bordered text-black input-accent w-full"
                    required
                  />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-5">Rating</h3>
                  <input
                    type="text"
                    name="rating"
                    defaultValue={rating}
                    placeholder="your product rating out of 5"
                    className="input input-bordered text-black input-accent w-full"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="px-20 mt-5">
              <h3 className="font-bold text-xl mb-5">Short description</h3>
              <input
                type="text"
                name="description"
                defaultValue={details}
                placeholder="your product short description"
                className="input input-bordered text-black input-accent w-full"
                required
              />
            </div>
    
            <div className="px-20 mt-5 mb-10">
              <button className="btn bg-emerald-500 text-white font-bold w-full">
                Update Product
              </button>
            </div>
          </form>
         </div>
        </div>
      );
};

export default UpdateProducts;
