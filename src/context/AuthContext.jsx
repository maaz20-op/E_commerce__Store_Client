// src/context/AuthContext.jsx
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { getLoggedInUser, logoutUser } from "../api/auth";
import { useNavigate } from "react-router-dom";

// Create Context
export const AuthContext = createContext();

// Provider Component
export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthUser, setAuthUser] = useState(null); // null means loading, false = not auth, object = user data
  const [loading, setLoading] = useState(true);

  // Function to fetch user data from backend
const fetchAuthUser = async () => {
  try {
    setLoading(true);
    const res = await getLoggedInUser();

    // Correct check according to backend
    if (res.data?.success && res.data?.data) {
      setAuthUser(res.data.data); // ✅ user object
    } else {
      setAuthUser(false); // not authenticated
    }
  } catch (error) {
    setAuthUser(false);
  } finally {
    setLoading(false);
  }
};


  useEffect(() => {
    fetchAuthUser(); // verify auth on mount
  }, []);

  // Optional: logout function
 const logout = async () => {
  try {
    const res = await logoutUser();
    if (!res.data.success) {
      setAuthUser(false);
      navigate("/"); // redirect after logout
    }
  } catch (error) {
  }
};

  return (
    <AuthContext.Provider
      value={{ isAuthUser, loading, setAuthUser, fetchAuthUser, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
