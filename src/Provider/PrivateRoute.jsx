import React, { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "./AuthProvider";
import Loading from "../Components/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Loading></Loading>;
  }

  if (user && user.email) {
    return children;
  } else {
    return <Navigate to={"/auth/login"}></Navigate>;
  }
};

export default PrivateRoute;
