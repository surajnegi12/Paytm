import React from "react";
import { Navigate } from "react-router-dom";

function ProtrctedRoutes({ children }) {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/signin" replace />;
  }
  return children;
}
export default ProtrctedRoutes;
