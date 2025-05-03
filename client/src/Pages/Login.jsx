import React, { useState } from "react";
import { Link, useNavigate } from "react-router"; // ✅ Fix import
import axios from "axios";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { userLoginInfo } from "../../slices/userSlice";
import { ModeToggle } from "../components/mode-toggle";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/auth/login", {
        email,
        password,
      })
      .then((res) => {
        localStorage.setItem("userdata", JSON.stringify(res.data.data));
        toast("Login successful!");
        dispatch(userLoginInfo(res.data.data));
        navigate("/"); // or wherever you want to go
      })
      .catch((err) => {
        console.log(err);
        toast.error("Invalid email or password");
      });
  };

  return (
    <section className="container flex items-center justify-center min-h-screen bg-white dark:bg-gray-900">
      <ToastContainer />
      <form
        onSubmit={handleLogin}
        className="max-w-96 w-full text-center border border-gray-300/60 dark:border-gray-700 rounded-2xl px-8 bg-white dark:bg-gray-800"
      >
        <h1 className="text-gray-900 dark:text-white text-3xl mt-10 font-medium">
          Login
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
          Please sign in to continue
        </p>

        {/* Email Input */}
        <div className="flex items-center w-full mt-10 bg-white dark:bg-gray-800 border border-gray-300/80 dark:border-gray-700 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <svg
            width={16}
            height={11}
            viewBox="0 0 16 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-500 dark:text-gray-400"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 .55.571 0H15.43l.57.55v9.9l-.571.55H.57L0 10.45zm1.143 1.138V9.9h13.714V1.69l-6.503 4.8h-.697zM13.749 1.1H2.25L8 5.356z"
              fill="currentColor"
            />
          </svg>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="bg-transparent text-gray-700 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 outline-none text-sm w-full h-full"
            required
          />
        </div>

        {/* Password Input */}
        <div className="flex items-center mt-3 w-full bg-white dark:bg-gray-800 border border-gray-300/80 dark:border-gray-700 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <svg
            width={13}
            height={17}
            viewBox="0 0 13 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-500 dark:text-gray-400"
          >
            <path
              d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z"
              fill="currentColor"
            />
          </svg>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="bg-transparent text-gray-700 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 outline-none text-sm w-full h-full"
            required
          />
        </div>

        <div className="mt-5 text-left">
          <a
            className="text-sm text-indigo-500 dark:text-indigo-400 hover:underline"
            href="#"
          >
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          className="mt-2 w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity"
        >
          Login
        </button>

        <p className="text-gray-500 dark:text-gray-400 text-sm mt-3 mb-11">
          Don’t have an account?{" "}
          <Link
            className="text-indigo-500 dark:text-indigo-400 hover:underline"
            to="/signup"
          >
            Sign up
          </Link>
        </p>
        <div className="mb-10">
          {" "}
          <ModeToggle />
        </div>
      </form>
    </section>
  );
};

export default Login;
