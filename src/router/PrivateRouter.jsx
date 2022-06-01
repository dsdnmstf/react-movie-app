import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRouter = () => {
  const userContext = useContext(AuthContext);

  return userContext ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
