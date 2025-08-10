import React from "react";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

import AuthPage from "../../Layout/AuthLayout";

const loginDetails = {
  title: "Sign in to your account",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates sed optio, impedit repudiandae, aperiam",
  btnText: "Sign In",
};

const Login = () => {
  return (
    <AuthPage {...loginDetails}>
      <form>
        <div className="flex flex-col space-y-4 gap-6">
          <div className="flex flex-col space-y-2">
            <label
              htmlFor=""
              className="text-start text-gray-800 font-semibold text-md"
            >
              Email
            </label>
            <Input type="email" name="email" placeholder="Email" />
            <div className="flex flex-col space-y-2">
              <label
                htmlFor=""
                className="text-start text-gray-800 font-semibold text-md"
              >
                Password
              </label>
              <Input type="password" name="password" placeholder="Password" />
            </div>
          </div>
        </div>
        <div className="mb-10 w-full flex items-center justify-between mt-4">
          <div className="flex items-center justify-between w-full">
            <Button
              type="submit"
              className="bg-[#365A4C] rounded-lg w-full text-white font-semibold py-3 hover:bg-[#365A4C]/90 transition duration-300 ease-in-out hover:scale-110"
            >
              Sign In
            </Button>
          </div>
        </div>
      </form>
      <a
        href="/forgot-password"
        className="text-gray-600 hover:text-[#365A4C] transition duration-300"
      >
        Forgot Password?
      </a>
      <p className="mt-6 text-gray-600">
        Don't have an account?{" "}
        <a
          href="/register"
          className="text-[#365A4C] hover:underline font-medium"
        >
          Sign Up
        </a>
      </p>
    </AuthPage>
  );
};

export default Login;
