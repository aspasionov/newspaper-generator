import { useContext } from 'react';
import { Outlet, Navigate } from "react-router-dom";
import { CopyContext } from '../../App';

const ProtectedRoute = () => {
  const { token } = useContext(CopyContext);
  const isAuthenticated = !!token;
  if (!isAuthenticated) {
    return <Navigate to="/login" />
  }
  return <Outlet />
};

export default ProtectedRoute;
