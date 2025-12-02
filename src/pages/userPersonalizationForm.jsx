import { useState, useContext } from "react";
import ReactCountryFlag from "react-country-flag";
import { sendUserPersonalizationTOBackend } from "../api/user"; // backend route
import {useNavigate} from 'react-router-dom'
import { AuthContext } from "../context/AuthContext";
import Loader from '../utils/loader.jsx';

// Full country list with code, ISO for flag
const countries = [
  { name: "Pakistan", code: "+92", iso: "PK" },
  { name: "United States", code: "+1", iso: "US" },
  { name: "United Kingdom", code: "+44", iso: "GB" },
  { name: "India", code: "+91", iso: "IN" },
  { name: "Canada", code: "+1", iso: "CA" },
  { name: "Australia", code: "+61", iso: "AU" },
  { name: "Germany", code: "+49", iso: "DE" },
  { name: "France", code: "+33", iso: "FR" },
  // ... add more countries if needed
];

export default function UserInfoForm() {
  const [loading, setLoading] = useState(false);
  const {isAuthUser, setAuthUser} = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    country: "",
    countryCode: "",
    countryIso: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleCountryChange = (e) => {
    const selected = countries.find((c) => c.name === e.target.value);
    if (selected) {
      setFormData((prev) => ({
        ...prev,
        country: selected.name,
        countryCode: selected.code,
        countryIso: selected.iso,
      }));
    }
  }
  const handlePhoneCodeChange = (e) => {
    const selected = countries.find((c) => c.code === e.target.value);
    if (selected) {
      setFormData((prev) => ({
        ...prev,
        countryCode: selected.code,
        countryIso: selected.iso,
      }));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    e.target.disabled = true;
    const {name, phone, address, country} = formData
   const res = await  sendUserPersonalizationTOBackend({name, phone, address, country}, setAuthUser)
  if(res?.data?.success){
    setLoading(false);
    e.target.disabled = false;
    navigate('/');
  }else {
    e.target.disabled = false;
    setLoading(false);
 navigate('/register');
  }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-red-50 to-white p-4">
      <div className="bg-white shadow-2xl rounded-3xl w-full max-w-lg md:max-w-xl lg:max-w-2xl p-8 md:p-12 lg:p-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-red-500 mb-8 text-center">
          Alkaram Cloths Store
        </h1>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-4"
        >
          {/* Name */}
          <div className="sm:col-span-2">
            <label className="block text-gray-700 font-semibold mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 transition"
              required
            />
          </div>

          {/* Phone with code */}
          <div className="sm:col-span-2 flex flex-col sm:flex-row gap-3">
            <div className="flex items-center gap-2 w-full sm:w-40">
              {formData.countryIso && (
                <ReactCountryFlag
                  countryCode={formData.countryIso}
                  svg
                  style={{ width: "1.8em", height: "1.8em" }}
                />
              )}
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handlePhoneCodeChange}
                className="flex-1 px-3 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 transition w-full"
                required
              >
                <option value="">Code</option>
                {countries.map((c) => (
                  <option key={c.iso} value={c.code}>
                    {c.code} {c.name}
                  </option>
                ))}
              </select>
            </div>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your Correct phone Number"
              className="flex-1 px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 transition w-full"
              required
            />
          </div>

          {/* Country */}
          <div className="sm:col-span-2 flex items-center gap-3">
            {formData.countryIso && (
              <ReactCountryFlag
                countryCode={formData.countryIso}
                svg
                style={{ width: "2em", height: "2em" }}
              />
            )}
            <select
              name="country"
              value={formData.country}
              onChange={handleCountryChange}
              className="flex-1 px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 transition w-full"
              required
            >
              <option value="">Select your country</option>
              {countries.map((c) => (
                <option key={c.iso} value={c.name}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          {/* Address */}
          <div className="sm:col-span-2">
            <label className="block text-gray-700 font-semibold mb-2">Enter your Correct address to get Order/Parcel, Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your address"
              rows="3"
              className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 transition resize-none"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="sm:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-red-400 hover:bg-red-500 text-white font-semibold py-3 px-10 rounded-2xl shadow-lg transition transform hover:scale-105"
            >
            <span className="flex justify-center items-center gap-3.5">Submit {loading && <Loader size={20}/>}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
