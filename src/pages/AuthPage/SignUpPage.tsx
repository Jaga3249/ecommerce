import Layout from "../../layout/Layout";
import signuplogo from "../../assets/signuplogo.png";
import googlelogo from "../../assets/google.png";
import { useNavigate } from "react-router-dom";
const SignUpPage = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="">
        <div className="flex mt-12 mb-20 w-full">
          <div className="w-[805px]">
            <img src={signuplogo} alt="signup logo" className="w-full h-full" />
          </div>
          <div className="flex items-center justify-center w-[40%]">
            <form action="" className="flex flex-col gap-2 pl-10">
              <h1 className="font-semibold text-4xl mr-7 mt-1">
                Create an account
              </h1>
              <span className="text-base">Enter your details below</span>
              <div className="flex flex-col gap-2 my-5">
                <input
                  type="text"
                  className=" py-3 border-b-2 outline-none "
                  placeholder="Name"
                />
                <input
                  type="text"
                  className=" py-3 border-b-2 outline-none "
                  placeholder="Email or Phone Number"
                />
                <input
                  type="text"
                  className=" py-3 border-b-2 outline-none"
                  placeholder="Password"
                />
              </div>
              <div className="w-full flex flex-col gap-4">
                <button className="bg-[#db4444] p-3 w-full rounded-sm text-white">
                  Create Account
                </button>
                <p className="flex justify-center items-center gap-2 border-[1px] border-[rgba(0,0,0,0.4)] py-1 rounded-sm cursor-pointer">
                  <img src={googlelogo} alt="google logo" className="w-8 h-8" />
                  Continue with Google
                </p>
                <p className="text-center">
                  Already have an account ?
                  <span
                    className="text-blue-600 font-medium cursor-pointer"
                    onClick={() => navigate("/login")}
                  >
                    {" "}
                    Login
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default SignUpPage;
