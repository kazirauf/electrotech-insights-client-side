import { useLoaderData } from "react-router-dom";

import { useState } from "react";
import Swal from "sweetalert2";
import Navbar from "../Shared/Navbar/NAvbar";

const MyCart = () => {
    const myCart = useLoaderData()
    const [users, setUsers] = useState(myCart)
  

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
         title: 'Are you sure?',
         text: "You won't be able to revert this!",
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Yes, delete it!'
       }).then((result) => {
         if (result.isConfirmed) {
       

         fetch(`http://localhost:5000/cartProducts/${_id}`, {
             method: "DELETE"
            
         })
         .then(res => res.json())
         .then(data => {
             console.log(data);
             if(data.deletedCount > 0) {
             Swal.fire(
             'Deleted!',
             'Your file has been deleted.',
             'success'
           )
           const remainingUser = users.filter(user => user._id !== _id)
           setUsers(remainingUser)
            }
         })
         }
       })
 }
    return (
        <div className="h-[1000px]">
            <Navbar></Navbar>
     
    {
        myCart.map(c => <div className="grid lg:grid-cols-2 grid-cols-1 py-20" key={c._id}>
                <div className="card card-side bg-base-100 shadow-xl border-emerald-500 border ">
          <figure><img className="h-52 lg:w-72" src={c.image_url} alt="Movie"/></figure>
          <div className="card-body">
            <h2 className="lg:card-title">{c.name}</h2>
            <p className="lg:text-lg font-bold">Brand: {c.band_name}</p>
            <p className="lg:text-lg font-bold">Price ${c.Price}</p>
            <p className="lg:text-lg font-bold">Type: {c.type}</p>
            <p className="lg:text-lg font-bold">Rating: {c.rating}</p>
            <div className="card-actions justify-end">
              <button onClick={() => handleDelete(c._id)} className="btn bg-red-500 text-white font-bold">Delete Cart</button>
             
            </div>
          </div>
        </div>
        </div>)
    }
                </div>
    );
};

export default MyCart;