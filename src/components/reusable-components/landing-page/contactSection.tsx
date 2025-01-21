import { H2, SP } from "../../global-components/headings";
import quote from "../../../assets/landing_page/quote.svg";
import profiles from "../../../assets/landing_page/profiles.svg";
import ConIcon from "../../../assets/landing_page/conIcon.png";

const ContactSection = () => {
  return (
    <div className="container p-6 m-auto w-full  flex flex-col lg:flex-row justify-between items-start gap-x-32 gap-y-10">
      <div className="lg:w-1/2 h-full flex flex-col justify-between items-start gap-8 lg:gap-12">
        <p className=" text-4xl l:text-5xl text-white font-semibold">
          People are Saying About Baccass
        </p>
        <SP className="text-base">
          Everything you need to accept to payment and grow your money of manage
          anywhere on planet
        </SP>
        <img src={quote} alt="" />
        <div>
          <SP className="font-light text-base">
            I am very helped by this E-wallet application , my days are very
            easy to use this application and its very helpful in my life , even
            I can pay a short time 😍
          </SP>
          <SP className="font-medium mt-3 text-base">_ Aria Zinanrio</SP>
        </div>
        <img src={profiles} alt="" />
      </div>
      <div className="w-full lg:w-1/2 bg-[#222938] p-7 lg:p-14 rounded-2xl flex flex-col items-center gap-4">
        <img src={ConIcon} alt="" className="w-10 lg:w-14" />
        <H2 className="text-white">Get Started</H2>
        <form action="" className="w-full flex flex-col gap-4">
          <div>
            <label
              htmlFor="email"
              className="font-semibold block mb-3 text-gray "
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-full h-14 bg-white border-0 rounded-lg focus:outline-gray px-4"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="font-semibold block mb-3 text-gray "
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="What do you have to say?"
              className="w-full  bg-white border-0 rounded-lg focus:outline-gray p-4"
              rows={5}
            />
          </div>
          <div className="w-full flex flex-col items-end">
            <button className="w-full py-4 bg-green text-white hover:scale-105 active:scale-95 transition duration-300 rounded-lg">
              Request Demo
            </button>
            <span className="cursor-pointer w-full text-sm mt-2 text-right text-white">
              or Start Free Trial
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
