import { H3 } from "../../global-components/headings";
import unspalsh from "../../../assets/landing_page/unsplash.svg";
import notion from "../../../assets/landing_page/notion.svg";
import intercom from "../../../assets/landing_page/intercom.svg";
import descript from "../../../assets/landing_page/descript.svg";
import grammarly from "../../../assets/landing_page/grammarly.svg";

const images = [unspalsh, notion, intercom, descript, grammarly];

const CollaboratorSection = () => {
  return (
    <div className="flex items-center flex-col gap-7 lg:gap-14">
      <H3 className="text-center">More than 25,000 teams use Baccass</H3>
      <div className="w-full flex justify-between items-center gap-9 overflow-auto">
        {images.map((image) => (
          <img src={image} className="h-5 lg:h-9" />
        ))}
      </div>
    </div>
  );
};

export default CollaboratorSection;
