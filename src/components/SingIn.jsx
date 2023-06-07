const SignIn = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <form className=" flex flex-col bg-gray-200 shadow-md rounded px-8 py-6 mt-4 min-w-[20rem] md:w-[20rem]">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2 text-sm text-start"
            >
              Username or email address
            </label>

            <div></div>
            <input
              type="email"
              id="email"
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              
            />
          </div>

          <div>
            <div className="mb-6">
                <div className="flex justify-between">

                <label
                htmlFor="password"
                className="block text-gray-700 font-bold mb-2 text-sm text-start"
              >
                Password
              </label>

                <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
                </div>

              <input
                type="password"
                id="password"
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
               
              />
            </div>
            
          </div>
          <div>
            <button
              className="w-full bg-gray-900  hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>

      <div className="flex justify-center bg-gray-200 shadow-md rounded px-8 py-4 mt-4 min-w-[20rem] md:w-[20rem]">
        <h1 className="block text-gray-700 font-bold mb-2 text-sm text-start">New in Funko?</h1>
        <a
              className="ms-2 inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Create Account
            </a>
      </div>
    </>
  );
};

export default SignIn;
