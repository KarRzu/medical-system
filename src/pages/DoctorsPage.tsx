import { Card } from "../components/shared/card/Card";
import { specialityData, specialityImages } from "../assets/assets";
import { useEffect, useState } from "react";
import { Button } from "../components/shared/button/Button";
import { useNavigate } from "react-router-dom";
import { fetchDoctors } from "../components/services/patientService";

export function DoctorsPage() {
  const [doctors, setDoctors] = useState([]);
  const [filterDoc, setFilterDoc] = useState([]); //Przechowujemy listę pobranych lekarzy
  const [selectedSpeciality, setSelectedSpeciality] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const loadDoctors = async () => {
      const doctors = await fetchDoctors();
      setDoctors(doctors);
      setFilterDoc(doctors);
    };

    loadDoctors();
  }, []); //useeffect wykonuje sie raz po załadowaniu komponentu

  //specjalizacja wybór

  const applyFilter = () => {
    if (selectedSpeciality === "All Doctors" || !selectedSpeciality) {
      //i zadna nie wybrana specjalizacja
      setFilterDoc(doctors); // Jeśli "Wszyscy lekarze", nie filtrujemy
    } else {
      setFilterDoc(
        doctors.filter((doc) => doc.speciality === selectedSpeciality)
      );
    }
  };

  useEffect(() => {
    applyFilter(); // Wywołuje filtr za każdym razem, gdy zmieni się `selectedSpeciality`
  }, [selectedSpeciality, doctors]); // Uruchamia się, gdy `selectedSpeciality` zostanie zaktualizowane

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
              imgSrc={specialityImages[doc.speciality]}
            />
          ))}
        </div>
        <div className="fixed bottom-8 right-8">
          <Button
            className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-600"
            onClick={() => navigate("/add-doctor")}
          >
            + Add Doctor
          </Button>
        </div>
      </div>
    </>
  );
}
