import React from "react";
import { Link } from "react-router-dom";

const Auth = () => {
  const handleSignIn = () => {
    window.location.href = "/management";
  };
  return (
    <>
      <div
        className={
          "w-full px-10 flex flex-col items-center h-screen bg-gradient-to-r from-cyan-500 to-cyan-700 justify-center"
        }
      >
        <div
          className={
            "bg-gradient-to-r from-cyan-400 to-sky-400 p-16 text-center rounded-md"
          }
        >
          <h1 className={"text-4xl font-bold"}>Sign In</h1>
          <div className={"form"}>
            <div>
              <input
                className={ 
                  "w-full mt-3 rounded-sm focus:ring-2 focus:ring-sky-400 outline-none ease-in-out duration-500 p-2 text-sm"
                }
                type="email"
                name="email"
                id="email"
                placeholder=" Enter email address"
              />

              <input
                className={
                  "w-full mt-3 rounded-sm focus:ring-2 focus:ring-sky-400 outline-none ease-in-out duration-500 p-2 text-sm"
                }
                type="password"
                name="password"
                id="password"
                placeholder=" Enter school ID"
              />

              <button
                className={
                  "bg-sky-200 mt-3 p-2 w-full font-bold rounded-sm hover:bg-sky-400 hover:text-white hover:shadow-lg ease-in duration-300"
                }
               onClick={handleSignIn}>
                Sign In
              </button>
            </div>
            <div className="w-full flex gap-10 md:gap-72 items-center mt-3 justify-center">
            <Link to='/' className={"text-sm text-slate-200 cursor-pointer"}>
                forgot password?
              </Link>

              <Link to='/register' className={"text-sm font-bold text-cyan-900 cursor-pointer hover:text-white"}>
                Register your school?
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
