import { useParams } from "react-router-dom";
import { doctors } from "../assets/assets";
import { useEffect, useState } from "react";
import { MdVerified } from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";

export function DoctorDetail() {
  const { docId } = useParams();
  const [docInfo, setDocInfo] = useState(null);

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc.id === docId);
    setDocInfo(docInfo);
    console.log(docInfo);
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  return (
    <>
      {docInfo ? (
        <div className="flex">
          <div className="border border-gray-300 w-1/6  flex justify-center items-center m-10 bg-slate-200 rounded-lg">
            <img src={docInfo.image} alt="image dr." className="w-40 " />
          </div>

          <div className="w-[700px] p-4 mt-10 h-60 rounded-lg border border-gray-300">
            <div className="flex gap-2 items-center">
              <h1>{docInfo.name}</h1> <MdVerified />
            </div>

            <div className="flex gap-2 items-center">
              <p className="text-gray-400 text-sm">{docInfo.speciality}</p>
              <button className="border border-gray-300 p-1 rounded-2xl text-sm text-gray-400 ">
                {docInfo.experience}
              </button>
            </div>
            <br />

            <div className="flex gap-2 items-center">
              <p>About</p>
              <IoIosInformationCircleOutline />
            </div>

            <p>
              Lorem ipsum dolor sit amet conn quidem densectetur quis voluptatum
              itaque eaque nihil. Lorem ipsum dolor sit amet conn quidem
              densectetur quis voluptatum itaque eaque nihil.
            </p>

            <br />
            <p>
              Appointment fee: <b> ${docInfo.fees}</b>
            </p>
          </div>
        </div>
      ) : (
        <p>Doctor not found</p>
      )}
    </>
  );
}
