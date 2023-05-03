import AuthPhoto from "../assets/auth.png";
function LoginPage() {
  return (
    <div className="h-screen  flex ">
      <div className="flex-1 hidden lg:flex flex justify-center items-center">
        <div className="p-16">
          <img src={AuthPhoto} />
        </div>
      </div>

      <div className="flex-1  flex-col  flex justify-center items-center">
        <div className="m-[100px] flex flex-col gap-8 justify-center items-center bg-red-200">
          <h1 className="text-8xl font-bold">Login</h1>
          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="example@gmail.com"
              className="p-6 text-4xl outline-none rounded-lg"
            />
            <input
              type="password"
              className="p-6 text-4xl outline-none rounded-lg"
            />
            <button
              type="submit"
              className="p-4 text-4xl mt-4 bg-[#db4c3f] text-white rounded-lg hover:bg-red-600"
            >
              Login
            </button>
          </form>
          <div className="flex gap-4">
            <p className="text-2xl text-gray-500 hover:text-[">
              forgot password?
            </p>
            <p className="text-2xl text-gray-500 hover:text-[">
              Don't have an account? <span>Go to sign up</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
