import { createUserWithEmailAndPassword } from "firebase/auth";
import medicalBanner from "../../../assets/online-medical-assistance-illustration.png";
import { auth } from "../../../auth/firebase-config";
import { SubmitHandler, useForm } from "react-hook-form";

export type FormFields = {
  email: string;
  password: string;
};

export function SignUpForm() {
  const { register, handleSubmit } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[570px]">
        <div className="flex items-center justify-center py-12">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto grid w-[350px] gap-6"
          >
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-bold">Sign Up</h1>
              <p className="text-balance text-muted-foreground">
                Enter your information to create an account
              </p>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <div className="flex items-center">
                  <label htmlFor="email">Email</label>
                </div>
                <input
                  className="border-2 rounded-lg w-96 p-2"
                  type="email"
                  placeholder="admin@example.com"
                  {...register("email")}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <label htmlFor="password">Password</label>
                </div>
                <input
                  className="border-2 rounded-lg w-96 p-2"
                  type="password"
                  {...register("password")}
                />
              </div>
              <button className="p-2 bg-custom-viollet text-custom-white  rounded-2xl">
                Create an account
              </button>
            </div>
            <div className="mt-4 text-center text-sm">
              <p>
                Already have an account?{" "}
                <a
                  href="../sign-in/SignInForm.tsx"
                  className="text-custom-viollet"
                >
                  Sign In
                </a>
              </p>
            </div>
          </form>
        </div>
        <div className="hidden bg-muted lg:block">
          <img src={medicalBanner} alt="image" />
        </div>
      </div>
    </>
  );
}
