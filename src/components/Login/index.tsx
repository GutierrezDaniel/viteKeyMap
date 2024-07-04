import React from "react";

const Login = ({ setValid }): JSX.Element => {
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-r from-amber-400 text-yellow-700 rounded-md h-4/5 w-2/4 ">
      <label className="mt-8 w-3/4 text-lg text-zinc-300" htmlFor="user">
        User:
      </label>
      <input
        className="my-2 h-8 w-3/4 rounded-sm shadow-inner"
        type="text"
        id="user"
        name="user"
      />
      <label className="mt-8 w-3/4 text-lg text-zinc-300" htmlFor="password">
        Password:
      </label>
      <input
        className="my-2 h-8 w-3/4 rounded-sm shadow-inner"
        type="password"
        id="password"
        name="password"
      />
      <button
        type="button"
        onClick={() => setValid(true)}
        className="text-zinc-300"
      >
        Log In
      </button>
    </div>
  );
};

export default Login;
