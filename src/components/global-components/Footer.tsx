import { P } from "./headings";
import Logo from "./logo";
import { FaArrowRight } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full container m-auto">
      <div className=" w-full flex flex-col lg:flex-row justify-between items-start gap-x-28 gap-y-10">
        <div className="w-full flex flex-col items-center lg:items-start gap-3 lg:w-1/3">
          <Logo size={50} />
          <P className="m-0">Get started now try our product</P>
          <form className="mt-3 w-full border-2 border-white bg-transparent rounded-full h-fit p-2 flex justify-between gap-2">
            <input
              type="email"
              name="email"
              placeholder="Enter your email here"
              className="w-full bg-transparent border-none focus:outline-none p-2"
            />
            <button className="p-3 rounded-full bg-green text-white">
              <FaArrowRight size={28} />
            </button>
          </form>
        </div>
        <div className="w-full lg:w-2/3 flex flex-col lg:flex-row justify-between gap-y-10">
          <div className="flex flex-col justify-start items-center lg:items-start gap-5">
            <P className="text-white cursor-pointer">Support</P>
            <P className="cursor-pointer">Help centre</P>
            <P className="cursor-pointer">Account information</P>
            <P className="cursor-pointer">About</P>
            <P className="cursor-pointer">Contact us</P>
          </div>
          <div className="flex flex-col justify-start items-center lg:items-start gap-5">
            <P className="text-white cursor-pointer">Help and Solution</P>
            <P className="cursor-pointer">Talk to support</P>
            <P className="cursor-pointer">Support docs</P>
            <P className="cursor-pointer">System status</P>
            <P className="cursor-pointer">Covid responde</P>
          </div>
          <div className="flex flex-col justify-start items-center lg:items-start gap-5">
            <P className="text-white cursor-pointer">Product</P>
            <P className="cursor-pointer">Update</P>
            <P className="cursor-pointer">Security</P>
            <P className="cursor-pointer">Beta test</P>
            <P className="cursor-pointer">Pricing product</P>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-y-5 mt-10 lg:mt-20">
        <p className="text-lg text-center font-semibold text-white">
          © 2022 Biccas Inc. Copyright by Abdulhakeem
        </p>
        <p className="text-lg text-center font-semibold text-white">
          Terms and Conditions - Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Footer;
