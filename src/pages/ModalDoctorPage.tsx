import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../components/shared/input/Input";
import { usePatientsActions } from "../hooks/usePatientsActions";
import { useNavigate } from "react-router-dom";

export type InputFields = {
  name: string;
  speciality: string;
  email: string;
  degree: string;
  address1: string;
  address2: string;
  experience: string;
  fees: string;
  about: string;
  image?: FileList;
};

export type Doctor = {
  name: string;
  speciality: string;
  email: string;
  degree: string;
  address1: string;
  address2: string;
  experience: string;
  fees: string;
  about: string;
  imageUrl?: string;
};

export function ModalDoctorPage() {
  const { createDoctor } = usePatientsActions();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputFields>();

  const onSubmit: SubmitHandler<InputFields> = async (data) => {
    console.log("Data submitted:", data);
    const newDoctor: Doctor = {
      ...data,
      imageUrl: data.image?.length
        ? URL.createObjectURL(data.image[0])
        : undefined,
    };

    console.log(newDoctor);

    try {
      await createDoctor(newDoctor);
      navigate("/doctors");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex ml-12 min-h-screen">
      <form
        className="w-3/4 p-6 bg-white rounded-lg shadow-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Add Doctor
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-600 mb-1">Doctor Name</label>
            <Input placeholder="Name" {...register("name")} />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Speciality</label>
            <Input placeholder="Speciality" {...register("speciality")} />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Doctor Email</label>
            <Input type="email" placeholder="Email" {...register("email")} />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Degree</label>
            <Input placeholder="Degree" {...register("degree")} />
          </div>

          <div>
            <div>
              <label className="block text-gray-600 mb-1">Address</label>
              <Input placeholder="Address" {...register("address1")} />
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Address 1</label>
              <Input placeholder="Address" {...register("address2")} />
            </div>
          </div>

          <div>
            <label className="block text-gray-600 mb-1">Image</label>
            <Input placeholder="Image" type="file" {...register("image")} />
          </div>

          <div>
            <label className="block text-gray-600 mb-1">
              Experience (Years)
            </label>
            <Input
              type="number"
              placeholder="Years of experience"
              {...register("experience")}
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Fees</label>
            <Input placeholder="Fees" {...register("fees")} />
          </div>
          <div className="col-span-2">
            <label className="block text-gray-600 mb-1">About</label>
            <textarea
              placeholder="About"
              className="w-full"
              {...register("about")}
            />
          </div>
        </div>

        <button className="w-full mt-6 py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition">
          Register
        </button>
      </form>
    </div>
  );
}
