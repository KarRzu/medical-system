import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetchDoctors } from "../components/services/patientService";
import { DoctorDetail } from "./DoctorDetail";

export function DoctorDetailsFetcher() {
  const { doctorId } = useParams();
  const { data, error, isLoading } = useSWR("doctors", fetchDoctors);

  console.log("Doctor ID from URL:", doctorId);

  if (isLoading) return <div>Loading doctor details...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  const doctor = data?.find((doc: { id: string }) => doc.id === doctorId);

  if (!doctor) return <div>No doctor found.</div>;

  return <DoctorDetail doctor={doctor} />;
}
