import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AdminContext } from "../context/AdminContext";

const AdminPrivateRoute = ({ children }) => {
  const { isAdmin, loading } = useContext(AdminContext);

  if (loading) return null; // or a loader

  return isAdmin ? children : <Navigate to="/admin-login" />;
};

export default AdminPrivateRoute;
