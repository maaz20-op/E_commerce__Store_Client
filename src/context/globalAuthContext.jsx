// src/components/ProtectedRoute.jsx
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";

export default function ProtectedRoute({ children, adminOnly = false }) {
  const { isAuthUser, loading } = useContext(AuthContext);

  if (loading) return <div>Loading...</div>; // wait until auth is checked
 // not logged in

 if(adminOnly && isAuthUser.userId?.role !== "admin") return <Navigate to="/" replace />
 

  return children; // authorized
}
