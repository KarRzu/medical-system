import { MdVerified } from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { specialityImages } from "../assets/assets";
import { Doctor } from "./ModalDoctorPage";

export function DoctorDetail({ doctor }: { doctor: Doctor }) {
  const { name, speciality, experience, fees } = doctor;

  return (
    <>
      <section className="flex gap-8 p-8 max-w-screen-lg mx-auto">
        <div className="flex flex-col items-center w-1/4 bg-gray-100 rounded-lg shadow-md p-6">
          <img
            src={specialityImages[speciality]}
            alt="doctor"
            className="w-40"
          />
        </div>

        <div className="w-3/4 p-6 rounded-lg shadow-md bg-white">
          <div className="flex items-center gap-2 mb-2">
            <h1 className="text-2xl font-semibold text-gray-800">{name}</h1>
            <MdVerified className="text-blue-500" />
          </div>

          <p className="text-sm text-gray-500">{speciality}</p>
          <p className="text-sm text-gray-400 mb-4">Experience: {experience}</p>

          <div className="flex items-center gap-1 text-lg font-medium text-gray-700 mb-3">
            <IoIosInformationCircleOutline className="text-blue-500" />
            <span>About</span>
          </div>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
            purus et quam ullamcorper suscipit. Nulla facilisi.
          </p>

          <p className="text-gray-700 text-lg">
            Appointment fee:{" "}
            <span className="font-semibold text-blue-600">${fees}</span>
          </p>
        </div>
      </section>
    </>
  );
}
