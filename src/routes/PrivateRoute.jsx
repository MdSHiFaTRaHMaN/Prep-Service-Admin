import { Navigate, useLocation } from "react-router-dom";
import { Spin } from "antd";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");
  const isLoading = false; 

  if (isLoading) {
    return <Spin />;
  }

  // Check if username and password exist in localStorage
  if (!username) {
    return <Navigate to="/login" state={{ from: location  }} replace />;
  }

  return children;
};

export default PrivateRoute;
