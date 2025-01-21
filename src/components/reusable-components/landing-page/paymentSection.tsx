import { useState } from "react";
import { H3, SP } from "../../global-components/headings";
import PricingDisplay from "../../global-components/pricingDisplay";

const PaymentSection = () => {
  const [plan, setPlan] = useState("y");
  return (
    <div className="w-full flex flex-col gap-6 lg:gap-10 items-center">
      <H3 className="max-w-[440px] text-center">
        Choose Plan That’s Right For You
      </H3>
      <SP>Choose plan that works best for you, feel free to contact us</SP>
      <div className="w-fit flex justify-center items-center gap-3 shadow-lg bg-white rounded-md border border-gray/10 p-2">
        <span
          className={`text-semibold px-5 py-3 hover:bg-green/50 hover:text-white cursor-pointer rounded-md transition duration-300 ${
            plan === "m" ? "bg-green text-white" : ""
          }`}
          onClick={() => setPlan("m")}
        >
          Bill Monthly
        </span>
        <span
          className={`text-semibold px-5 py-3 hover:bg-green/50 hover:text-white cursor-pointer rounded-md transition duration-300 ${
            plan === "y" ? "bg-green text-white" : ""
          }`}
          onClick={() => setPlan("y")}
        >
          Bill Yearly
        </span>
      </div>
      <PricingDisplay />
    </div>
  );
};

export default PaymentSection;
