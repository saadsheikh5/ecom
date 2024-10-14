import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="w-1/2 px-8 py-8 mx-auto my-32 bg-slate-500 rounded-lg">
      <form onSubmit={submitHandler}>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white"
          >
            Email address
          </label>
          <input
            type="email"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            id="email"
            aria-describedby="emailHelp"
            required
          />
          <div className="text-xs text-white mt-1">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-white"
          >
            Password
          </label>
          <input
            type="password"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            id="password"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
      <Link to="/signup">
        <div className="bg-blue-600 text-white text-center p-2 rounded-md my-2 cursor-pointer hover:bg-blue-700">
          Sign up now!
        </div>
      </Link>
    </div>
  );
};

export default Login;
