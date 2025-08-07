import React from "react";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";

const Home = () => {
  return (
    <div className="min-h-screen hero bg-base-200 flex justify-center items-center p-4">
      <div className="hero-content flex-col w-full max-w-3xl p-0 md:p-8">
        <div className="card w-full shadow-2xl bg-base-100">
          <div className="card-body p-8 md:p-12">
            {/* Header */}
            <div className="flex flex-col items-center space-y-6 mb-12">
              <h1 className="text-5xl md:text-6xl font-bold text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Welcome Back
              </h1>
              <p className="text-center text-base-content/60 text-xl md:text-2xl">
                Please sign in to continue
              </p>
            </div>

            {/* Social Auth Buttons */}
            <div className="flex flex-col gap-6 px-4 md:px-8">
              <button className="btn btn-outline hover:bg-transparent hover:text-black normal-case text-xl h-20 transition-all duration-300 hover:scale-105">
                <FcGoogle className="w-8 h-8 mr-4" />
                Continue with Google
              </button>

              <button className="btn btn-outline hover:bg-slate-800 normal-case text-xl h-20 transition-all duration-300 hover:scale-105">
                <BsGithub className="w-8 h-8 mr-4" />
                Continue with GitHub
              </button>
            </div>

            {/* Divider */}
            <div className="divider text-lg text-base-content/60 my-12">
              New to the platform?
            </div>

            {/* Sign Up Link */}
            <div className="text-center mb-6">
              <a
                href="#"
                className="btn btn-primary btn-lg normal-case text-xl px-12"
              >
                Create an account
              </a>
            </div>
          </div>
        </div>

        {/* Terms of Service */}
        <div className="text-center mt-12 text-base text-base-content/60 max-w-2xl px-4">
          By continuing, you agree to our
          <a href="#" className="link link-hover mx-2 font-medium text-primary">
            Terms of Service
          </a>
          and
          <a href="#" className="link link-hover mx-2 font-medium text-primary">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
