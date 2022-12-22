import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center h-full">
      {/* <div class="px-6 h-full text-gray-800"> */}
      <form className="p-5 shadow-xl border-1 shadow-sky-800 card bg-darkBlue">
        <div className="mb-6">
          <input
            type="text"
            className="block w-full px-4 py-2 m-0 text-xl font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleFormControlInput2"
            placeholder="Email address"
          />
        </div>

        <div className="mb-6">
          <input
            type="password"
            className="block w-full px-4 py-2 m-0 text-xl font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleFormControlInput2"
            placeholder="Password"
          />
        </div>

        <div className="flex items-center justify-center text-center lg:text-left">
          <button
            type="button"
            className="items-center inline-block py-3 text-sm font-medium leading-snug text-white uppercase transition duration-150 ease-in-out bg-blue-600 rounded shadow-md px-7 hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
          >
            Login
          </button>
        </div>
      </form>
      {/* </div> */}
    </div>
  );
};

export default Login;
