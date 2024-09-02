import medicalBanner from "../../../assets/online-medical-assistance-illustration.png";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegistrationSchema } from "./validation";
import { Link } from "react-router-dom";
import { Errors } from "../../shared/Errors";
import { Button } from "../../shared/button/Button";
import { useAuth } from "../../../auth/AuthProvider";
import { Input } from "../../shared/input/Input";
import { ROUTES } from "../../../router/routes";
// import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export type FormFields = {
  email: string;
  password: string;
  confirmPassword: string;
};

export function SignUpForm() {
  const { signUp } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: yupResolver(RegistrationSchema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await signUp(data.email, data.password);
      // toast.success("Create successful!");
    } catch (error) {
      // toast.error("Login failed");
      console.log(error);
    }
  };
  return (
    <>
      {/* <ToastContainer /> */}
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
                <Input
                  type="email"
                  placeholder="admin@example.com"
                  {...register("email")}
                />
                <Errors message={errors.email?.message} />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <label htmlFor="password">Password</label>
                </div>
                <Input
                  type="password"
                  placeholder="admin@example.com"
                  {...register("password")}
                />
                <Errors message={errors.password?.message} />
              </div>
              <Button type="submit">Create an account</Button>
            </div>
            <div className="mt-4 text-center text-sm">
              <p>
                Already have an account? <Link to={ROUTES.signIn}>Sign In</Link>
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
