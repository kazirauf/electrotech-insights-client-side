import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <div className="flex justify-center">
            <span className="loading loading-spinner text-accent text-5xl font-bold w-32"></span>
        </div>
    }


    if (user) {
        return children;
    }

    return <Navigate  to="/login "></Navigate>;
};

export default PrivateRoute;
