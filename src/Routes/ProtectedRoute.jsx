import React, { useContext } from "react";
import { authContext } from "../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

function ProtectedRoute({ children, allowedRoles }) {
  const { token, role } = useContext(authContext);
  const isAllowed = allowedRoles.includes(role);
  const accessibleRoute =
    token && isAllowed ? children : <Navigate to="/login" replace={true} />;
  return accessibleRoute;
}

export default ProtectedRoute;
