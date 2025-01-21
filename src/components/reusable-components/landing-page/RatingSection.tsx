import { H2, SP } from "../../global-components/headings";
import RatingBlock from "../../global-components/RatingBlock";
import { SlGraph } from "react-icons/sl";
import { GrAnalytics } from "react-icons/gr";
import { BiShapeSquare } from "react-icons/bi";

const RatingSection = () => {
  const details = [
    {
      icon: SlGraph,
      title: "Publishing",
      desc: "Plan, collaborate, and publishing your content that drivees meaningful engagement and growth for your brand",
    },
    {
      icon: GrAnalytics,
      title: "Analytics",
      desc: "Analyze your performance and create goergeous report",
    },
    {
      icon: BiShapeSquare,
      title: "Engagement",
      desc: "Quickly navigate you and engage with your audience",
    },
  ];
  return (
    <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-y-12 gap-7 py-[60px]">
      <div className="flex flex-col gap-16 max-w-[620px]">
        <div className="flex flex-col gap-7">
          <H2>How we support our partner all over the world</H2>
          <SP>
            SaaS become a common delivery model for many business application,
            including office software, messaging software, payroll processing
            software, DBMS software, management software
          </SP>
        </div>
        <div className="flex justify-start items-center gap-6">
          <RatingBlock rating={"4.9"} text="databricks" />
          <RatingBlock rating={"4.8"} text="Chainalysis" />
        </div>
      </div>
      <div className="max-w-[500px] flex flex-col gap-7">
        {details.map((detail) => (
          <div className="flex justify-start items-start gap-7">
            <div className="p-3 rounded-md bg-white shadow-md text-green">
              <detail.icon size={22} />
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-2xl font-bold">{detail.title}</p>
              <SP>{detail.desc}</SP>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingSection;
