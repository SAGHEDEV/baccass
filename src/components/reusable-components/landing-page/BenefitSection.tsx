import { H2 } from "../../global-components/headings";
import { FaCircleCheck } from "react-icons/fa6";
import BenefitVector from "../../../assets/landing_page/benefitImg.svg";

const BenefitSection = () => {
  const benefits = [
    "Free Consulting With Expert Saving Money",
    "Online Banking",
    "Investment Report Every Month",
    "Saving Money For The Future",
    "Online Transaction",
  ];
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-20">
      <div className="w-full flex flex-col gap-12 justify-start items-center lg:items-start">
        <H2 className="max-w-[400px] text-center lg:text-left">
          What Benefit Will You Get
        </H2>
        <div className="flex flex-col gap-6">
          {benefits.map((benefit) => (
            <span className="flex items-center gap-3">
              <FaCircleCheck size={26} className="text-green" />{" "}
              <span>{benefit}</span>
            </span>
          ))}
        </div>
      </div>
      <img src={BenefitVector} alt="" className="lg:w-[50%] relative " />
    </div>
  );
};

export default BenefitSection;
