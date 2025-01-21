import { H2, SP } from "../../global-components/headings";
import Feature1 from "../../../assets/landing_page/Feature1.svg";
import Feature2 from "../../../assets/landing_page/Feature 2.svg";
import Feature3 from "../../../assets/landing_page/Feature3.svg";

const FeatureSection = () => {
  const features = [
    {
      image: Feature1,
      title: "Collaboration Teams",
      desc: "Here you can handle projects together with team virtually",
    },
    {
      image: Feature2,
      title: "Cloud Storage",
      desc: "No need to worry about storage because we provide storage up to 2 TB",
    },
    {
      image: Feature3,
      title: "Collaboration Teams",
      desc: "We always provide useful information to make it easier for you every day",
    },
  ];
  return (
    <div className="w-full flex flex-col justify-start gap-7 md:gap-14">
      <div className="w-full flex justify-between gap-7 flex-col lg:flex-row items-center">
        <H2 className="lg:max-w-[330px] text-center lg:text-left">
          Our Features you can get
        </H2>
        <SP className="max-w-[390px] text-center lg:text-left">
          We offer a variety of interesting features that you can help increase
          yor productivity at work and manage your project easily
        </SP>
        <button className="px-5 py-3 h-fit rounded-full transition duration-300 bg-green border border-green text-white font-semibold hover:bg-white hover:text-green">
          Get Started
        </button>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-11 justify-center items-center">
        {features.map((feature, index) => (
          <div
            key={index} // Use a unique key for each feature
            className="border-4 p-4 border-gray/20 rounded-2xl w-full flex flex-col gap-7 justify-start items-center"
          >
            <img
              src={feature.image}
              alt={feature.title || "Feature image"}
              className="w-full"
            />
            <div className="max-w-[340px]">
              <p className="text-3xl font-semibold mb-3">{feature.title}</p>
              <SP>{feature.desc}</SP>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
