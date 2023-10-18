import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Root from "../Layout/Root";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import Register from "../Pages/Register/Register";



 

const router =  createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
          {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch("http://localhost:5000/bands")
          },
          {
            path: "/login",
            element: <Login></Login>
          },
          {
            path: "/register",
            element: <Register></Register>
          },
          {
            path: "/addProduct",
            element: <AddProduct></AddProduct>
          },
          {
            path: "/myCart",
            element: <MyCart></MyCart>
          }
        ]
    }
])

export default router;