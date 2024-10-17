import { User } from "./Table";
import { SubmitHandler, useForm } from "react-hook-form";
import { Errors } from "./Errors";
import { useEffect } from "react";
import { usePatientsActions } from "../../hooks/usePatientsActions";

export type ModalProps = {
  closeModal: () => void;
  addPatient: () => void;
  currentPatient?: User | null;
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

export function Modal({ closeModal, addPatient, currentPatient }: ModalProps) {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<InputFields>({
    // resolver: yupResolver(RegistrationSchema),
  });

  const { createPatient, editPatient } = usePatientsActions();

  useEffect(() => {
    if (currentPatient) {
      const [firstName = "", lastName = ""] = currentPatient.name.split(" ");
      setValue("firstName", firstName);
      setValue("lastName", lastName);
      setValue("idNumber", currentPatient.id || "");
      setValue("dateBirth", currentPatient.dateBirth || "");
      setValue("mobile", currentPatient.mobile || "");
      setValue("email", currentPatient.email || "");
      setValue("address", currentPatient.address || "");
    } else {
      reset();
      reset({
        firstName: "",
        lastName: "",
        idNumber: "",
        dateBirth: "",
        mobile: "",
        email: "",
        address: "",
      });
    }
  }, [currentPatient, setValue, reset]);

  const onSubmit: SubmitHandler<InputFields> = async (data) => {
    const newPatient: User = {
      name: `${data.firstName} ${data.lastName}`,
      ...data,
      id: currentPatient?.id || "",
    };

    try {
      if (currentPatient) {
        await editPatient(newPatient);
      } else {
        await createPatient(newPatient);
      }
      addPatient();
      closeModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <fieldset className="fixed flex justify-center items-center w-full h-screen top-0 left-0 bg-[rgba(0,0,0,0.4)]">
        <fieldset className="bg-white p-6 w-[30rem] h-[35rem] rounded-md">
          <div className="flex justify-between items-center mb-4">
            <p className="text-xl font-bold">
              {currentPatient ? "Edit Patient" : "Add New Patient"}
            </p>
            <button className="text-xl font-bold" onClick={closeModal}>
              x
            </button>
          </div>

          <form
            className="grid grid-cols-2 gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label htmlFor="firstName">First Name</label>
              <input
                {...register("firstName")}
                placeholder="First Name"
                className="border w-full p-2 rounded-md"
              />
              <Errors message={errors.firstName?.message} />
            </div>

            <div>
              <label htmlFor="lastName">Last Name</label>
              <input
                {...register("lastName")}
                placeholder="Last Name"
                className="border w-full p-2 rounded-md"
              />
              <Errors message={errors.lastName?.message} />
            </div>

            <div>
              <label htmlFor="idNumber">ID number</label>
              <input
                {...register("idNumber")}
                placeholder="ID number"
                className="border w-full p-2 rounded-md"
              />
              <Errors message={errors.idNumber?.message} />
            </div>

            <div>
              <label htmlFor="dateBirth">Birth Date</label>
              <input
                {...register("dateBirth")}
                placeholder="Date Birth"
                className="border w-full p-2 rounded-md"
              />
              <Errors message={errors.dateBirth?.message} />
            </div>

            <div>
              <label htmlFor="mobile">Mobile</label>
              <input
                {...register("mobile")}
                placeholder="Mobile"
                className="border w-full p-2 rounded-md"
              />
              <Errors message={errors.mobile?.message} />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input
                {...register("email")}
                placeholder="Email"
                className="border w-full p-2 rounded-md"
              />
              <Errors message={errors.email?.message} />
            </div>

            <div>
              <label htmlFor="address">Address</label>
              <input
                {...register("address")}
                placeholder="Address"
                className="border w-full p-2 rounded-md"
              />
              <Errors message={errors.address?.message} />
            </div>

            <button
              type="submit"
              className="col-span-2 bg-blue-500 text-white p-2 rounded-md"
            >
              Save
            </button>
          </form>
        </fieldset>
      </fieldset>
    </>
  );
}
