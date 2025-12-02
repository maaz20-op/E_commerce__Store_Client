import { useRef, useState } from "react";
import { getCode } from "../api/auth"; // backend route
import { useNavigate } from "react-router-dom";
import CryptoJS from "crypto-js"; // npm install crypto-js

const SECRET_KEY = "maaz-secret-key"; // encryption key (keep secret ideally on server)

export default function VerifyAccount() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState([]);
  const inputRef = useRef([]);
  const navigate = useNavigate();

  // Move between input fields
  const moveToNextField = (value, index) => {
    if (value.length === 1 && index < 3) inputRef.current[index + 1]?.focus();
    if (value === "" && index > 0) inputRef.current[index - 1]?.focus();
  };

  // Encrypt code before storing
  const encryptCode = (code) => {
    return CryptoJS.AES.encrypt(code, SECRET_KEY).toString();
  };

  // Decrypt code for verification
  const decryptCode = (encrypted) => {
    return CryptoJS.AES.decrypt(encrypted, SECRET_KEY).toString(CryptoJS.enc.Utf8);
  };

  // Step 1: send code to email
  const handleConfirmEmail = async () => {
    if (!email) return alert("Please enter your email");

    const res = await getCode(email); // backend API
    if (res?.data?.success) {
      const encryptedCode = encryptCode(res.data.code.toString());
      localStorage.setItem("encryptedServerCode", encryptedCode); // save encrypted code
      setStep(2);
      setTimeout(() => inputRef.current[0]?.focus(), 100);
    } else {
      alert("Error sending verification code");
    }
  };

  // Step 2: verify user code
  const handleVerifyCode = (e) => {
    e.preventDefault();
    const userEnteredCode = code.join("");

    if (userEnteredCode.length !== 4) return alert("Please enter all 4 digits");

    const encryptedCode = localStorage.getItem("encryptedServerCode");
    const decryptedCode = encryptedCode ? decryptCode(encryptedCode) : "";

    if (userEnteredCode === decryptedCode) {
      localStorage.removeItem("encryptedServerCode"); // remove after success
      navigate("/user-information"); // success
    } else {
      alert("Invalid code. Try again!");
      setCode([]);
      inputRef.current.forEach((input) => (input.value = ""));
      inputRef.current[0]?.focus();
    }
  };

  return (
    <div className="h-screen w-full flex select-none items-center justify-center bg-[#e2dcdc]">
      <div className="px-4 py-7 flex flex-col space-y-4 items-center rounded-2xl shadow-lg bg-white">
        <h1 className="text-red-400 font-bold text-3xl">Alkaram Cloth House</h1>

        {step === 1 && (
          <>
            <h1 className="text-black font-bold text-2xl">Enter Your Email</h1>
            <p className="text-sm text-gray-700 max-w-[80%] text-center">
              Please enter your email to receive a verification code
            </p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-4 py-2 border rounded w-[80%]"
            />
            <button
              onClick={handleConfirmEmail}
              className="px-6 py-2 cursor-pointer rounded shadow-lg active:scale-95 w-[80%] bg-red-400 text-white mt-2"
            >
              Confirm
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <h1 className="text-black font-bold text-2xl">Verify Your Account</h1>
            <p className="text-sm text-gray-700 max-w-[80%] text-center">
              Enter the 4-digit verification code sent to{" "}
              <span className="text-red-700 font-medium">{email}</span>
            </p>
            <form className="flex flex-col items-center w-[80%] lg:w-full gap-5">
              <div className="flex gap-2">
                {Array(4)
                  .fill("")
                  .map((_, index) => (
                    <input
                      key={index}
                      ref={(el) => (inputRef.current[index] = el)}
                      type="text"
                      maxLength={1}
                      onChange={(e) => {
                        moveToNextField(e.target.value, index);
                        setCode((prev) => {
                          const newArr = [...prev];
                          newArr[index] = e.target.value;
                          return newArr;
                        });
                      }}
                      className="verify-account-box px-4 py-2 border rounded text-center w-12"
                    />
                  ))}
              </div>
              <button
                onClick={handleVerifyCode}
                className="px-6 py-2 cursor-pointer rounded shadow-lg active:scale-95 w-[80%] bg-red-400 text-white"
              >
                Verify Account
              </button>
            </form>
            <p className="mt-2">
              Didn't Receive Code?{" "}
              <span
                className="text-red-600 cursor-pointer font-medium"
                onClick={handleConfirmEmail}
              >
                Resend
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
