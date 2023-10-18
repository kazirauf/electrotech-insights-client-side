import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/NAvbar";
import Footer from "../Pages/Shared/Footer/Footer";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;