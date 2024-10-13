import React, { useState } from "react";
import { assets } from "../assets/assets";

const LoginSetup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("SignUp");

  return (
    <div className="login_setup fixed ">
      <form className="login_container" action="">
        <div className="form_title flex items-center justify-end gap-12 mb-4">
          <h2 className="font-semibold text-xl text-center">
            {currState === "SignUp"
              ? "Create your Account"
              : "Login to Account"}
          </h2>
          <img
            onClick={() => setShowLogin(false)}
            className="cross_icon cursor-pointer bg-orange-500 w-7 p-1 rounded-full hover:scale-105 hover:bg-orange-600"
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="form_input flex flex-col gap-6 w-[90%] mx-auto">
          {currState === "SignUp" ? (
            <input type="text" placeholder="Enter your name" required />
          ) : (
            ""
          )}

          <input type="email" placeholder="Enter your Email" required />
          <input type="password" placeholder="Enter Password" required />
        </div>
        <button
          className={
            currState === "SignUp"
              ? "sign_up hover:scale-105 transition duration-200"
              : "log_in hover:scale-105 transition duration-200"
          }
        >
          {currState}
        </button>
        <div className="form_conditions flex items-center gap-1 mt-6">
          <input type="checkbox" required />
          <p className="text-sm text-gray-200">
            By continuing, I agree to the terms and conditions.
          </p>
        </div>
        <div className="footer_part mt-8">
          {currState === "SignUp" ? (
            <p>
              Already have an account?{" "}
              <span
                className="underline cursor-pointer text-gray-200 text-sm hover:text-white transition duration-200"
                onClick={() => setCurrState("LogIn")}
              >
                Login here
              </span>
            </p>
          ) : (
            <p>
              Create new account?{" "}
              <span
                className="underline cursor-pointer text-gray-200 text-sm hover:text-white transition duration-200"
                onClick={() => setCurrState("SignUp")}
              >
                Click here!
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginSetup;
