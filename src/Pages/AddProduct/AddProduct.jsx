const AddProduct = () => {
    const handleAddProduct = (event) => {
    event.preventDefault()
      const form = event.target;
      const photo = form.image.value;
      const name = form.name.value;
      const band = form.bandName.value;
      const productTypes = form.types.value;
      const price = form.price.value;
      const productRating = form.rating.value;
      const productDescription = form.description.value;
      const product = {photo, name, band, productTypes, price, productRating, productDescription}
      console.log(product);

      fetch(`http://localhost:5000/addProducts`, {
         method: 'POST',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(product)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })

    }
  return (
    <div
      className=""
      style={{
        backgroundImage:
          "url(https://media.istockphoto.com/id/1447176653/photo/circuit-board-green-computer-data-technology-artificial-intelligence.webp?b=1&s=170667a&w=0&k=20&c=GmaJOL3qyjdO9psL10swlbeSdqUKrTnN6EmLvCDKkA4=)", backgroundRepeat: "no-repeat", backgroundSize: "cover", 
      }}
    >
     <div className="hero-overlay bg-opacity-60  min-h-[800px] py-10">
     <h1 className="text-5xl font-bold text-emerald-500 text-center mt-10 mb-10">
        Add Product
      </h1>
      <form onSubmit={handleAddProduct} className="text-white">
        <div className="grid lg:grid-cols-2 gap-16 px-20">
          <div>
            <div>
              <h3 className="font-bold text-xl mb-5">Image Link</h3>
              <input
                type="text"
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
                name="name"
                placeholder="your product name"
                className="input input-bordered text-black input-accent w-full"
                required
              />
            </div>
            <div>
              <h3 className="font-bold text-xl mb-5">Brand Name</h3>
              <input
                type="text"
                name="bandName"
                placeholder="your product brand name"
                className="input input-bordered text-black input-accent w-full"
                required
              />
            </div>
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
                </select>
              </label>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-5">Price</h3>
              <input
                type="text"
                name="price"
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
            placeholder="your product short description"
            className="input input-bordered text-black input-accent w-full"
            required
          />
        </div>

        <div className="px-20 mt-5 mb-10">
          <button className="btn bg-emerald-500 text-white font-bold w-full">
            Add Product
          </button>
        </div>
      </form>
     </div>
    </div>
  );
};

export default AddProduct;