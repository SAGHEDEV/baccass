import { useState } from "react";
import Logo from "./logo";
import { IoMenu } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";

const Header = () => {
  const [open, setOpen] = useState(false);
  const routes = ["Home", "Product", "FAQ", "Blog", "About us"];
  return (
    <div className="w-full flex justify-between items-center">
      <Logo size={50} />
      <div className="hidden lg:!flex justify-end items-center gap-20 ">
        <div className="flex justify-center items-center gap-5">
          {routes.map((route) => (
            <span className="cursor-pointer text-gray font-medium hover:text-dark">
              {route}
            </span>
          ))}
        </div>
        <div className="flex justify-end gap-3">
          <button className="px-5 py-2 rounded-md text-gray hover:bg-gray hover:text-white font-semibold transition duration-300 active:scale-95">
            Login
          </button>
          <button className="px-5 py-2 rounded-md text-white border border-green bg-green hover:bg-white hover:text-green font-semibold transition duration-300 active:scale-95">
            Signup
          </button>
        </div>
      </div>
      <span
        onClick={() => setOpen((prev) => (prev = !prev))}
        className="block lg:hidden w-fit  p-2 rounded-[100%] hover:bg-gray/30 cursor-pointer"
      >
        {!open ? <IoMenu size={34} /> : <MdOutlineCancel size={34} />}
      </span>
    </div>
  );
};

export default Header;
