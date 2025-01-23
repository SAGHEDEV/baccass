import { H1, P } from "../../global-components/headings";
import { MdSlowMotionVideo } from "react-icons/md";
import LandingImage from "../../../assets/landing_page/Group138.svg";
import Line from "../../../assets/landing_page/Vector 32.svg";

const HeroSection = () => {
  return (
    <div className=" w-full flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10">
      <div className="flex justify-between items-center lg:items-start gap-8 flex-col">
        <H1 className="lg:max-w-[555px] text-center lg:text-left">
          We’re here to Increase your Productivity
        </H1>
        <img src={Line} className="w-[70%] lg:w-[80%]" />
        <P className="max-w-[450px] text-center lg:text-left">
          Let's make your work more organize and easily using the Taskio
          Dashboard with many of the latest featuresin managing work every day.
        </P>
        <div className="w-full flex justify-center lg:justify-start items-center gap-4">
          <button className="px-5 py-3 rounded-full bg-green text-white border border-green hover:bg-white hover:text-green font-semibold transition duration-300 active:scale-95">
            Try free trial
          </button>
          <button className="px-5 py-3 rounded-full  font-semibold transition duration-300 flex gap-2 items-center border border-white hover:bg-gray group active:scale-95">
            <MdSlowMotionVideo size={22} />{" "}
            <span className="group-hover:text-white transition delay-100">
              View Demo
            </span>
          </button>
        </div>
      </div>
      <img
        src={LandingImage}
        alt="Welcome Here"
        className="w-full lg:w-[60%] translate-x-10"
      />
    </div>
  );
};

export default HeroSection;
