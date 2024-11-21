import { BsDot } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../router/routes";

export type CardProps = {
  id: string;
  titleName: string;
  description: string;
  imgSrc: string;
};

export function Card({ titleName, description, imgSrc, id }: CardProps) {
  const detailsURL = ROUTES.doctorDetail.replace(":doctorId", id);

  return (
    <Link
      to={detailsURL}
      className="bg-white w-52 h-80 rounded-xl flex flex-col items-center p-4 cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200"
    >
      <img src={imgSrc} alt="Doctor" className="w-28" />

      <div className="flex items-center mb-2">
        <BsDot className="text-green-500" />
        <span className="text-green-500 text-sm font-medium">Available</span>
      </div>

      <h1 className="text-lg font-semibold text-gray-800 mb-1 text-center">
        {titleName}
      </h1>
      <h2 className="text-sm text-gray-500 text-center">{description}</h2>
    </Link>
  );
}
