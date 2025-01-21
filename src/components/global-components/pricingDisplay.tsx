import { FaCircleCheck } from "react-icons/fa6";

const PricingDisplay = () => {
  const monthly = [
    {
      title: "Free",
      type: "free",
      desc: "Have a go and test your superpowers",
      price: 0,
      benefits: [
        "2 Users",
        "2 Files",
        "Public Share & Comments",
        "Chat Support ",
        "New income apps",
      ],
    },
    {
      title: "Pro",
      type: "pro",
      desc: "Experiment the power of infinite possibilities",
      saved: 30,
      price: 8,
      benefits: [
        "4 Users",
        "All apps",
        "Unlimited editable exports",
        "Folders and collaboration",
        "All incoming apps",
      ],
    },
    {
      title: "Business",
      type: "free",
      desc: "Unveil new superpowers and join the Design Leaque",
      price: 16,
      benefits: [
        "All the features of pro plan",
        "Account success Manager",
        "Single Sign-On (SSO)",
        "Co-conception pogram",
        "Collaboration-Soon",
      ],
    },
  ];
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14  items-center justify-center">
      {monthly.map((userPlan, index) => {
        return userPlan.type === "pro" ? (
          <div
            key={index}
            className="w-full h-fit flex flex-col gap-5 items-center p-6 rounded-2xl shadow-lg bg-green pt-12 "
          >
            <p className="font-semibold text-[30px] text-white text-center">
              {userPlan.title}
            </p>
            <p className="font-medium text-white max-w-[200px] text-center">
              {userPlan.desc}
            </p>
            <p className="relative text-center text-white font-bold text-4xl mt-2">
              <span className="text-sm font-medium absolute -top-3 -left-3">
                $
              </span>
              {userPlan.price}
            </p>
            <p className="px-3 py-2 bg-white/20 rounded-md text-xs font-semibold text-white">
              Save ${userPlan.saved} a year
            </p>
            <div className="w-full bg-white p-10 flex flex-col gap-5 justify-start items-start rounded-xl">
              {userPlan.benefits.map((benefit) => (
                <span className="flex items-center gap-3">
                  <FaCircleCheck size={24} className="text-green" />{" "}
                  <span>{benefit}</span>
                </span>
              ))}
              <button className="w-full font-semibold bg-green text-white px-5 py-3 lg:py-4 rounded-lg mt-3 hover:scale-105 active:scale-95 transition duration-300">
                Go to Pro plan
              </button>
            </div>
          </div>
        ) : (
          <div
            key={index}
            className="w-full h-fit flex flex-col gap-5 items-center p-6 rounded-2xl shadow-sm bg-white pt-12 "
          >
            <p className="font-semibold text-[30px] text-black text-center">
              {userPlan.title}
            </p>
            <p className="font-medium text-black max-w-[240px] text-center">
              {userPlan.desc}
            </p>
            <p className="relative text-center text-black font-bold text-4xl mt-2">
              <span className="text-sm font-medium absolute -top-3 -left-3">
                $
              </span>
              {userPlan.price}
            </p>
            <div className="w-full bg-gray/10 p-10 flex flex-col gap-5 justify-start items-start rounded-xl">
              {userPlan.benefits.map((benefit) => (
                <span className="flex items-center gap-3">
                  <FaCircleCheck size={24} className="text-green" />{" "}
                  <span>{benefit}</span>
                </span>
              ))}
              <button className="w-full font-semibold bg-white text-green shadow-sm px-5 py-3 lg:py-4 rounded-lg mt-3 hover:scale-105 active:scale-95 transition duration-300">
                Go to {userPlan.title} plan
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PricingDisplay;
