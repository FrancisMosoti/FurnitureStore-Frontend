import React from "react";
import AuthPage from "./AuthPage";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

const registerDetails = {
  title: "Create an account",
  description: "Fill in the details below to create your account.",
  btnText: "Sign Up",
};

const Register = () => {
  return (
    <AuthPage {...registerDetails}>
      <form>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col space-y-2">
            <label
              htmlFor=""
              className="text-start text-gray-800 font-semibold text-md"
            >
              Full Name
            </label>
            <Input type="text" name="name" placeholder="Full Name" />
          </div>
          <div className="flex flex-col space-y-2">
            <label
              htmlFor=""
              className="text-start text-gray-800 font-semibold text-md"
            >
              Phone Number
            </label>
            <Input type="text" name="name" placeholder="Phone Number" />
          </div>
          <div className="flex flex-col space-y-2">
            <label
              htmlFor=""
              className="text-start text-gray-800 font-semibold text-md"
            >
              Email
            </label>
            <Input type="email" name="email" placeholder="Email" />
          </div>
          <div className="flex flex-col space-y-2">
            <label
              htmlFor=""
              className="text-start text-gray-800 font-semibold text-md"
            >
              Password
            </label>
            <Input type="password" name="password" placeholder="Password" />
          </div>
          <div className="flex flex-col space-y-2">
            <label
              htmlFor=""
              className="text-start text-gray-800 font-semibold text-md"
            >
              Confirm Password
            </label>
            <Input
              type="password"
              name="confirm-password"
              placeholder="Confirm Password"
            />
          </div>
        </div>

        <div className="mb-10 w-full flex items-center justify-between mt-4">
          <div className="flex items-center justify-between w-full">
            <Button
              type="submit"
              className="bg-[#365A4C] rounded-lg w-full text-white font-semibold py-3 hover:bg-[#365A4C]/90 transition duration-300 ease-in-out hover:scale-110"
            >
              {registerDetails.btnText}
            </Button>
          </div>
        </div>
      </form>
      <p className="mt-6 text-gray-600">
        Already have an account?{" "}
        <a href="/login" className="text-[#365A4C] hover:underline font-medium">
          Sign In
        </a>
      </p>
    </AuthPage>
  );
};

export default Register;
