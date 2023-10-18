import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { updateProfile } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
    const {signInWithProvider, createUser} = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();
             const form = new FormData(e.currentTarget)
             const image = form.get('image')
             const name = form.get('name')
             const email = form.get('email')
             const password = form.get('password')
             console.log(name, email, password)
     
            
     
     
           const specialCharactersRegex = /[!@#\$%\^\&*\)\(+=._-]/g;
     
     
           if (password.length < 6) {
               toast.error('Password should be at least 6 characters or longer',{
                position: "top-center"
               });
               return;
           }
      
           else if (!/[A-Z]/.test(password)) {
            toast.error('Your password should have at least one upper case characters.',{
                position: "top-center"
               })
               return;
           }
           else if (!specialCharactersRegex.test(password)) {
            toast.error("Your password must have a special character",{
                position: "top-center"
               });
             return;
           }
           
           
           
             createUser(email, password)
             .then(result => {
               const user = result.user;
               console.log(user);
             updateProfile(result.user, {
                 displayName: name, 
                 photoURL: image
             })
             .then( () => console.log('profile updated'))
             .catch()
               if(user){
                 return toast.success('create the user account is Successfully done.',{
                    position: "top-center"
                   })
               }
             
             })
             .catch(error => {
               console.error(error)
              
             })
       }
    const handleSignInWithGoogle = () => {
        signInWithProvider()
        .then(result => {
            const user = result.user;
             console.log(user);
        })
        .catch(error => {
            console.error(error.message);
        })
    }


    return (
        <div>
        <div className="hero min-h-[800px] bg-base-200">
 <div className="hero-content flex-col lg:flex-row-reverse">
   <div className="text-center lg:text-left">
   
   </div>
   <div className="card flex-shrink-0  shadow-2xl bg-base-100 w-[400px]">
     <form onSubmit={handleRegister} className="card-body ">
       <div className="form-control">
         <label className="label">
           <span className="label-text">Image</span>
         </label>
         <input type="text" name="image" placeholder="your image url" className="input input-bordered" required />
       </div>
       <div className="form-control">
         <label className="label">
           <span className="label-text">Name</span>
         </label>
         <input type="text" name="name" placeholder="your full name" className="input input-bordered" required />
       </div>
       <div className="form-control">
         <label className="label">
           <span className="label-text">Email</span>
         </label>
         <input type="email" name="email" placeholder="your email address" className="input input-bordered" required />
       </div>
       <div className="form-control">
         <label className="label">
           <span className="label-text">Password</span>
         </label>
         <input type="password" name="password" placeholder="your password" className="input input-bordered" required />
         
       </div>
       <div className="form-control mt-6">
    
         <button className="btn bg-emerald-500 text-white font-bold">Register</button>
         <button onClick={handleSignInWithGoogle} className="btn bg-white border-2 border-emerald-500 mt-5 font-bold">
           <img className="w-7" src="https://www.svgrepo.com/show/303108/google-icon-logo.svg" alt="" />
         </button>
         <p className="block mt-5 font-bold ">you already have an account go to <Link className="text-emerald-500" to="/login">Login</Link></p>
       </div>
     </form>
   </div>
 </div>
</div>
<ToastContainer/>
       </div>
    );
};

export default Register;