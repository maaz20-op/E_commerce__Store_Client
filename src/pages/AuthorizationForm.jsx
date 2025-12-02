import React, { useState, useContext } from "react";
import { Mail, Lock } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { SignupUserLocal, LoginUserLocal } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Loader from "../utils/loader.jsx";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(""); // Add Error State

  const { setAuthUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(""); // Reset error before request

    let res;

    if (isLogin) {
      res = await LoginUserLocal(formData.email, formData.password, navigate, setAuthUser);
    } else {
      res = await SignupUserLocal(formData.email, formData.password, navigate, setAuthUser);
    }

    setLoading(false);

    // ❗ Error detection: if success false → show error
    if (!res?.data?.success) {
      setErrorMsg(res?.data?.message || "Something went wrong");
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:3000/api/auth/google";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md p-8 bg-red-50 rounded-2xl shadow-md">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <h1 className="text-red-400 text-2xl font-bold">Alkaram Cloth House</h1>
        </div>

        {/* 🔥 Show Error */}
        {errorMsg && (
          <p className="mb-4 text-center text-red-600 font-medium bg-red-100 py-2 rounded-lg">
            {errorMsg}
          </p>
        )}

        {/* Toggle */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => {
              setIsLogin(true);
              setLoading(false);
              setErrorMsg(""); // Reset error on toggle
            }}
            className={`px-4 py-2 rounded-l-xl font-medium ${
              isLogin
                ? "bg-red-400 text-white"
                : "bg-white text-red-400 border border-red-400"
            }`}
          >
            Login
          </button>

          <button
            onClick={() => {
              setIsLogin(false);
              setLoading(false);
              setErrorMsg(""); // Reset error on toggle
            }}
            className={`px-4 py-2 rounded-r-xl font-medium ${
              !isLogin
                ? "bg-red-400 text-white"
                : "bg-white text-red-400 border border-red-400"
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-red-400" size={20} />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 pl-10 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-300"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-3 text-red-400" size={20} />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 pl-10 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-300"
              required
            />
          </div>

          {isLogin && (
            <Link to="/verify-account">
              <div className="text-right text-sm text-red-500 hover:underline cursor-pointer">
                Forgot Password?
              </div>
            </Link>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-400 text-white p-3 rounded-lg font-medium hover:bg-red-500 transition disabled:opacity-60"
          >
            <div className="flex justify-center items-center gap-4">
              {isLogin ? "Login" : "Signup"}
              {loading && <Loader size={20} />}
            </div>
          </button>

          {/* Divider */}
          <div className="flex items-center my-4">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="mx-2 text-gray-400">OR</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          {/* Google Button */}
          {isLogin && (
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center gap-2 p-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
            >
              <FcGoogle size={24} />
              Login with Google
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
