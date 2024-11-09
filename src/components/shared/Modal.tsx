import { User } from "./Table";
import { SubmitHandler, useForm } from "react-hook-form";
import { Errors } from "./Errors";
import { usePatientsActions } from "../../hooks/usePatientsActions";

export type ModalProps = {
  closeModal: () => void;
  patientData?: User | null;
  isEditMode?: boolean;
};

export type InputFields = {
  firstName: string;
  lastName: string;
  idNumber: string;
  dateBirth: string;
  mobile: string;
  email: string;
  address: string;
};

export function Modal({ closeModal, patientData, isEditMode }: ModalProps) {
  const { createPatient, editPatient } = usePatientsActions();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputFields>({
    defaultValues:
      isEditMode && patientData
        ? {
            firstName: patientData.name.split(" ")[0],
            lastName: patientData.name.split(" ")[1] || "",
            idNumber: patientData.id,
            dateBirth: patientData.dateBirth,
            mobile: patientData.mobile,
            email: patientData.email,
            address: patientData.address,
          }
        : {},
  });

  const onSubmit: SubmitHandler<InputFields> = async (data) => {
    const newPatient: User = {
      name: `${data.firstName} ${data.lastName}`,
      ...data,
      id: isEditMode && patientData ? patientData.id : "",
    };

    try {
      if (isEditMode) {
        await editPatient(newPatient);
      } else {
        await createPatient(newPatient);
      }

      closeModal();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <fieldset className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm">
      <fieldset className="bg-white p-8 w-full max-w-md rounded-lg shadow-xl transform transition-all duration-300">
        <div className="flex justify-between items-center mb-6">
          <p className="text-2xl font-semibold text-gray-700">
            {isEditMode ? "Edit Patient" : "Add New Patient"}
          </p>
          <button
            className="text-gray-400 hover:text-gray-600 transition duration-200"
            onClick={closeModal}
          ></button>
        </div>

        <form
          className="grid grid-cols-2 gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="col-span-2 sm:col-span-1">
            <label htmlFor="firstName" className="text-sm text-gray-600">
              First Name
            </label>
            <input
              {...register("firstName")}
              placeholder="First Name"
              className="border w-full p-2 mt-1 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
            <Errors message={errors.firstName?.message} />
          </div>

          <div className="col-span-2 sm:col-span-1">
            <label htmlFor="lastName" className="text-sm text-gray-600">
              Last Name
            </label>
            <input
              {...register("lastName")}
              placeholder="Last Name"
              className="border w-full p-2 mt-1 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
            <Errors message={errors.lastName?.message} />
          </div>

          <div className="col-span-2">
            <label htmlFor="idNumber" className="text-sm text-gray-600">
              ID Number
            </label>
            <input
              {...register("idNumber")}
              placeholder="ID Number"
              className="border w-full p-2 mt-1 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
            <Errors message={errors.idNumber?.message} />
          </div>

          <div className="col-span-2 sm:col-span-1">
            <label htmlFor="dateBirth" className="text-sm text-gray-600">
              Birth Date
            </label>
            <input
              {...register("dateBirth")}
              placeholder="Date of Birth"
              className="border w-full p-2 mt-1 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
            <Errors message={errors.dateBirth?.message} />
          </div>

          <div className="col-span-2 sm:col-span-1">
            <label htmlFor="mobile" className="text-sm text-gray-600">
              Mobile
            </label>
            <input
              {...register("mobile")}
              placeholder="Mobile"
              className="border w-full p-2 mt-1 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
            <Errors message={errors.mobile?.message} />
          </div>

          <div className="col-span-2">
            <label htmlFor="email" className="text-sm text-gray-600">
              Email
            </label>
            <input
              {...register("email")}
              placeholder="Email"
              className="border w-full p-2 mt-1 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
            <Errors message={errors.email?.message} />
          </div>

          <div className="col-span-2">
            <label htmlFor="address" className="text-sm text-gray-600">
              Address
            </label>
            <input
              {...register("address")}
              placeholder="Address"
              className="border w-full p-2 mt-1 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
            <Errors message={errors.address?.message} />
          </div>

          <button
            type="submit"
            className="col-span-2 bg-blue-600 text-white font-semibold p-2 mt-4 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Save
          </button>
        </form>
      </fieldset>
    </fieldset>
  );
}
