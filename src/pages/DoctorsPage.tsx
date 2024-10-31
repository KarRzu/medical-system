import { Card } from "../components/shared/card/Card";
import { doctors, specialityData } from "../assets/assets";
import { useEffect, useState } from "react";

export function DoctorsPage() {
  const [filterDoc, setFilterDoc] = useState(doctors);
  const [selectedSpeciality, setSelectedSpeciality] = useState(null);

  const applyFilter = () => {
    if (selectedSpeciality === "All Doctors" || !selectedSpeciality) {
      setFilterDoc(doctors);
    } else {
      setFilterDoc(
        doctors.filter((doc) => doc.speciality === selectedSpeciality)
      );
    }
  };

  useEffect(() => {
    applyFilter();
  }, [selectedSpeciality]);

  return (
    <>
      <div className="flex gap-8 p-4 max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-2 w-1/4">
          {specialityData.map((doc, index) => (
            <p
              className={`px-3 py-2 border cursor-pointer border-gray-300 rounded-md text-sm shadow-sm hover:bg-gray-100 transition-all duration-300 ${
                selectedSpeciality === doc.speciality ? "bg-gray-200" : ""
              }`}
              onClick={() => setSelectedSpeciality(doc.speciality)}
              key={index}
            >
              {doc.speciality}
            </p>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 w-3/4">
          {filterDoc.map((doc) => (
            <Card
              key={doc.id}
              id={doc.id}
              titleName={doc.name}
              description={doc.speciality}
              imgSrc={doc.image}
            />
          ))}
        </div>
      </div>
    </>
  );
}
