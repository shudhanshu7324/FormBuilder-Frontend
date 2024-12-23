import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // Check if the user is authenticated
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  // If not authenticated, redirect to the login page
  if (!isAuthenticated) {
    return <Navigate to="/signin" />;
  }

  // Otherwise, render the protected component
  return children;
};

export default ProtectedRoute;
