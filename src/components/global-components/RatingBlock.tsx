import { P } from "./headings";
import { FaStar } from "react-icons/fa";

const RatingBlock = ({ rating, text }: { rating: string; text: string }) => {
  return (
    <div className="flex justify-start items-start flex-col gap-3">
      <span className="text-yellow-400 flex gap-1">
        <FaStar size={18} />
        <FaStar size={18} />
        <FaStar size={18} />
        <FaStar size={18} />
        <FaStar size={18} />
      </span>
      <span>
        <span className="font-semibold">{rating}</span> / 5 rating
      </span>
      <P>{text}</P>
    </div>
  );
};

export default RatingBlock;
