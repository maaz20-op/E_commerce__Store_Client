import React, { useState } from "react";
import { User, Mail, Lock} from "lucide-react";
import { FcGoogle } from "react-icons/fc";


export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Logging in with:", formData);
      // Call your login API here
    } else {
      console.log("Signing up with:", formData);
      // Call your signup API here
    }
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
    // Call your Google login API / OAuth here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md p-8 bg-red-50 rounded-2xl shadow-md">
        {/* Logo */}
        <div className="flex justify-center mb-6">
       <h1 className="text-red-400 text-2xl font-bold">Alkaram Cloth House</h1> 
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setIsLogin(true)}
            className={`px-4 py-2 rounded-l-xl font-medium ${
              isLogin
                ? "bg-red-400 text-white"
                : "bg-white text-red-400 border border-red-400"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
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
          {!isLogin && (
            <div className="relative">
              <User className="absolute left-3 top-3 text-red-400" size={20} />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-300"
                required
              />
            </div>
          )}

          <div className="relative">
            <Mail className="absolute left-3 top-3 text-red-400" size={20} />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-300"
              required
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-3 text-red-400" size={20} />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-300"
              required
            />
          </div>

          {isLogin && (
            <div className="text-right text-sm text-red-500 hover:underline cursor-pointer">
              Forgot Password?
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-red-400 text-white p-3 rounded-lg font-medium hover:bg-red-500 transition"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>

          {/* OR divider */}
          <div className="flex items-center my-4">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="mx-2 text-gray-400">OR</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          {/* Google Login */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-2 p-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
          >
          <FcGoogle size={24} className="text-red-400" />
            {isLogin ? "Login with Google" : "Sign Up with Google"}
          </button>
        </form>
      </div>
    </div>
  );
}
