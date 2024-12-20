import doc1 from "./doc1.png";
import doc2 from "./doc2.png";
import doc3 from "./doc3.png";
import doc4 from "./doc4.png";
import doc5 from "./doc5.png";
import doc6 from "./doc6.png";
import doc7 from "./doc7.png";
import doc8 from "./doc8.png";

type Speciality =
  | "All Doctors"
  | "General physician"
  | "Gynecologist"
  | "Dermatologist"
  | "Gastroenterologist"
  | "Neurologist"
  | "Cardiologist"
  | "Orthopaedist"
  | "Physiotherapist"
  | "Internist"
  | "Ophthalmologist";

interface SpecialityData {
  speciality: Speciality;
}

export const specialityData: SpecialityData[] = [
  { speciality: "All Doctors" },
  { speciality: "General physician" },
  { speciality: "Gynecologist" },
  { speciality: "Dermatologist" },
  { speciality: "Gastroenterologist" },
  { speciality: "Neurologist" },
  { speciality: "Cardiologist" },
  { speciality: "Orthopaedist" },
  { speciality: "Physiotherapist" },
  { speciality: "Internist" },
  { speciality: "Ophthalmologist" },
];

export const specialityImages: Partial<Record<Speciality, string>> = {
  "General physician": doc1,
  Gynecologist: doc2,
  Dermatologist: doc3,
  Gastroenterologist: doc4,
  Neurologist: doc5,
  Cardiologist: doc6,
  Orthopaedist: doc7,
  Physiotherapist: doc8,
};
