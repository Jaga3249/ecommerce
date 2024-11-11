import { useNavigate } from "react-router-dom";
import Layout from "../../layout/Layout";
import signuplogo from "../../assets/signuplogo.png";

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="">
        <div className="flex mt-12 mb-20 w-full">
          <div className="w-[60%]">
            <img src={signuplogo} alt="signup logo" className="w-full h-full" />
          </div>
          <div className="flex items-center justify-center w-[40%]">
            <form action="" className="flex flex-col gap-2">
              <h1 className="font-semibold text-4xl mr-7 mt-1">
                Log in to Exclusive
              </h1>
              <span className="text-base">Enter your details below</span>
              <div className="flex flex-col gap-2 my-5">
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
              <div className="w-full flex justify-between  gap-4">
                <button className="bg-[#db4444] p-3 rounded-sm text-white">
                  Log in to Exclusive
                </button>
                <span className="flex items-center text-red-500 cursor-pointer">
                  Forgot password
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default LoginPage;
