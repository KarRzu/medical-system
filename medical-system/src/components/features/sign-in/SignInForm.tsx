import medicalBanner from "../../../assets/online-medical-assistance-illustration.png";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginSchema } from "../sign-up/validation";
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
};

export function SignInForm() {
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: yupResolver(LoginSchema),
  });

  const onSubmit: SubmitHandler<FormFields> = async ({ email, password }) => {
    try {
      await login(email, password);
      // toast.success("Login successful!");
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
              <h1 className="text-3xl font-bold">Sign In</h1>
              <p className="text-balance text-muted-foreground">
                Enter your email below to login to your account
              </p>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <div className="flex items-center">
                  <label htmlFor="email">Email</label>
                </div>
                <Input type="email" required {...register("email")} />
                <Errors message={errors.email?.message} />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <label htmlFor="password">Password</label>
                </div>
                <Input type="password" required {...register("password")} />
                <Errors message={errors.password?.message} />
              </div>
              <Button type="submit">Login</Button>
            </div>
            <div className="mt-4 text-center text-sm">
              <p>
                Don't have an account? <Link to={ROUTES.signUp}>Sign Up</Link>
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
