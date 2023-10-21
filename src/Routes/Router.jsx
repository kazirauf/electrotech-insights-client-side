import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Root from "../Layout/Root";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPAge";
import PrivateRoute from "./PrivateRoute";
import BandProducts from "../Pages/BandProducts/BandProducts";
import BandProjuctDetails from "../Pages/BandProducts/BandProjuctDetails";
import UpdateProducts from "../Pages/UpdateProducts/UpdateProducts";



 

const router =  createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
          {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch("https://my-assignment-10-server-8gfrfphd9-kazirauf.vercel.app/bands")
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
            element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
          },
          {
            path: "/myCart",
            element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
            loader: () => fetch("https://my-assignment-10-server-8gfrfphd9-kazirauf.vercel.app/cartProducts")
          },
          {
            path: "/bands/:brand",
            element: <BandProducts></BandProducts>,
            loader: ({params}) => fetch(`https://my-assignment-10-server-8gfrfphd9-kazirauf.vercel.app/brands/${params.brand}`)
          },
          {
            path: "productDetails/:id",
            element: <PrivateRoute> <BandProjuctDetails></BandProjuctDetails></PrivateRoute>,
            loader: ({params}) => fetch(`https://my-assignment-10-server-8gfrfphd9-kazirauf.vercel.app/addProducts/${params.id}`)
          
          },
         {
            path: "/updateProducts/:id",
            element: <PrivateRoute><UpdateProducts></UpdateProducts></PrivateRoute>,
            loader: ({params}) => fetch(`https://my-assignment-10-server-8gfrfphd9-kazirauf.vercel.app/addProducts/${params.id}`)
         }
        ]
    }
])

export default router;