import { BsDot } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export type CardProps = {
  id: string;
  titleName: string;
  description: string;
  imgSrc: string;
};

export function Card({ titleName, description, imgSrc, id }: CardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/doctor/${id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-slate-100 w-48 h-72 rounded-2xl flex justify-center items-center m-8 cursor-pointer shadow-lg border border-gray-300 hover:shadow-xl transition-shadow duration-300"
    >
      <div className="flex flex-col items-start bg-slate-100">
        <img src={imgSrc} alt="img doctor" className="w-28" />
        <div className="flex items-center mt-4">
          <BsDot className="text-green-400 " />
          <p className="text-green-400 ml-1">Avaliable</p>
        </div>

        <h1 className="font-bold ">{titleName}</h1>
        <h2 className="text-gray-400 text-sm">{description}</h2>
      </div>
    </div>
  );
}
