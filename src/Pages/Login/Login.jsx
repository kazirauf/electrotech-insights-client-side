import { useContext } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../Providers/AuthProviders";
import Navbar from "../Shared/Navbar/NAvbar";
const Login = () => {
  const {signIn, signInWithProvider} = useContext(AuthContext)
  const handleLogin = e => {
    e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

       

        signIn(email, password)
        .then(result => {
          const user = result.user;
          console.log(user);
          form.reset()
          if(user){
            return toast.success('you logged in Successfully.',{
              position: "top-center"
            })
          }
        })
        .catch(error => {
          console.error(error)
          toast.error(error.message,{
            position: "top-center"
          })
          
        })
  }
    

   const handleSignInWithGoogle= () =>{
    signInWithProvider()
    .then(result => {
      const user = result.user;
      console.log(user);
    })
    .catch(error => console.error(error))
   }

    return (
        <div>
          <Navbar></Navbar>
         <div className="hero min-h-[800px] ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
    
    </div>
    <div className="card flex-shrink-0  shadow-2xl bg-base-100 w-[400px]">
      <form onSubmit={handleLogin} className="card-body ">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-emerald-500 text-white font-bold">Login</button>
          <button onClick={handleSignInWithGoogle} className="btn bg-white border-2 border-emerald-500 mt-5 font-bold">
            <img className="w-7" src="https://www.svgrepo.com/show/303108/google-icon-logo.svg" alt="" />
          </button>
          <p className="block mt-5 font-bold ">Do not have an account go to <Link className="text-emerald-500" to="/register">Register</Link></p>
        </div>
      </form>
    </div>
  </div>
</div>
<ToastContainer/>
        </div>
        
    );
};

export default Login;