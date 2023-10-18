import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
         <div className="hero min-h-[800px] bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
    
    </div>
    <div className="card flex-shrink-0  shadow-2xl bg-base-100 w-[400px]">
      <form className="card-body ">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-emerald-500 text-white font-bold">Login</button>
          <button className="btn bg-white border-2 border-emerald-500 mt-5 font-bold">
            <img className="w-7" src="https://www.svgrepo.com/show/303108/google-icon-logo.svg" alt="" />
          </button>
          <p className="block mt-5 font-bold ">Do not have an account go to <Link className="text-emerald-500" to="/register">Register</Link></p>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;