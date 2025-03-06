import { Navigate, useLocation } from "react-router-dom";
import { Spin } from "antd";
import { useAdminProfile } from "../api/api";

const PrivateRoute = ({ children }) => {
  const { adminProfile, isLoading, isError, error } = useAdminProfile();

  const location = useLocation();
  const token = localStorage.getItem("token");

  if (isLoading) {
    return <Spin />;
  }

  if (isError || error || !adminProfile || !token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;