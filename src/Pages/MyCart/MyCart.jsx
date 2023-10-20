import { useLoaderData } from "react-router-dom";
import Cart from "./Cart";

const MyCart = () => {
    const myCart = useLoaderData()
    console.log(myCart);
    return (
        <div className="lg:h-[800px]">
            <h1 className="text-center font-bold text-5xl mt-10 mb-10">My Cart</h1>
          <div className="grid lg:grid-cols-2 mx-10 grid-cols-1">
          {
                myCart.map(cart => <Cart cart={cart} key={cart._id}></Cart>)
            }
          </div>
        </div>
    );
};

export default MyCart;