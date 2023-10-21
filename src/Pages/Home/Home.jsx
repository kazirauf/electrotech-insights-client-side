import { Link, NavLink, useLoaderData } from "react-router-dom";
import OutTechnology from "../OutTechnology/OutTechnology";
import Banner from "./Banner";
import OurService from "./OurService";
import "../../App.css"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createContext, useContext, useState } from "react";
import ReactSwitch from "react-switch";
import { AuthContext } from "../../Providers/AuthProviders";
export const ThemeContext = createContext(null);
const Home = () => {
    const bands = useLoaderData();
    const [theme, setTheme] = useState("dark")
    const {user, logOut} = useContext(AuthContext)



    const handleLogOut = () => {
      logOut()
      .then()
      .catch()
    }
      const links = <>
      <li className="text-slate-900 text-lg font-bold"><NavLink style={({ isActive}) => {
    return {
      fontWeight: isActive ? "bold" : "",
      backgroundColor: isActive ? "white" : "",
      color: isActive ? "#00dc82" : "",
      
       
    };
  }}  to="/">Home</NavLink></li>
      <li className="text-slate-900 text-lg font-bold"><NavLink  style={({ isActive}) => {
    return {
      fontWeight: isActive ? "bold" : "",
      backgroundColor: isActive ? "white" : "",
      color: isActive ? "#00dc82" : "",
  
       
    };
  }} to="/addProduct">Add Product</NavLink></li>
      <li className="text-slate-900 text-lg font-bold"><NavLink  style={({ isActive}) => {
    return {
      fontWeight: isActive ? "bold" : "",
      backgroundColor: isActive ? "white" : "",
      color: isActive ? "#00dc82" : "",
      
       
    };
  }} to="/myCart">My Cart</NavLink></li>
    </>
    const toggleTheme = () => {
      setTheme((curr) => (curr === "light" ? "dark" : "light"));
    };
    console.log(bands);
    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
 
        <div  className="App" id={theme}>
               {/* navbar stat */}
               <nav>
            <div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost bg-black text-white lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 bg-black text-white rounded-box max-w-52">
      <div className="switch text-lg lg:hidden">
          <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
      <div className="flex items-center gap-3 mr-3 lg:hidden">
      <img className="w-12 h-12 rounded-full" src={user?.photoURL} alt="" />
     <div>
     <h1 className="">{user?.displayName}</h1>
     
     </div>
     </div>
     <div className="hidden lg:flex text-white" >
   {
                    user ?
                        <button onClick={handleLogOut} className="text-white bg-green-500 rounded-lg border-0 btn lg:text-lg text-xs lg:h-full">Sign Out</button>
                        :
                        <button className="text-white bg-green-500 rounded-lg border-0 btn"><NavLink to="/login">Login</NavLink></button>
                }
   </div>
    
        {links}
      </ul>
    </div>
    <div className="hidden lg:flex items-center gap-2">
    <img className="w-14 " src="https://cdn-icons-png.flaticon.com/512/4257/4257824.png" alt="" />
        <h4 className="font-bold">ElectroTech Insights</h4>
    </div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
     
    </ul>
  </div>
  <div className="switch">
          <label className=" text-lg "> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch className=" text-lg  hidden" onChange={toggleTheme} checked={theme === "dark"} />
        </div>
  <div className="navbar-end">

  {
      user ? 
     <div className=" items-center gap-3 mr-3 hidden lg:flex">
      <img className="w-12 h-12 rounded-full" src={user?.photoURL} alt="" />
     <div>
     <h1 className="">{user?.displayName}</h1>
     </div>
     </div>
      : 
      <img className="w-12 rounded-full mr-3 border-2 border-emerald-500" src="https://as1.ftcdn.net/v2/jpg/03/53/11/00/1000_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg" alt="" />
    }
   <div className="hidden lg:flex">
   {
                    user ?
                        <button onClick={handleLogOut} className="text-white bg-green-500 rounded-lg border-0 btn lg:text-lg text-xs lg:h-full">Sign Out</button>
                        :
                        <button className="text-white bg-green-500 rounded-lg border-0 btn"><NavLink to="/login">Login</NavLink></button>
                }
   </div>
   
  </div>
</div>
        </nav>
             {/* navbar end */}
           <Banner></Banner>
           <div className="grid lg:grid-cols-3 gap-10 mt-20">
            {
             
                bands.map(band => <div key={band.id} className="mx-10">  <Link to={`/bands/${band.name}`}>
                <div className="card card-side shadow-2xl border border-emerald-500  text-emerald-500">
                  <figure className="">
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
</ThemeContext.Provider>
    );
};

export default Home;