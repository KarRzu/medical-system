import { signInWithEmailAndPassword } from "firebase/auth";
import medicalBanner from "../../../assets/online-medical-assistance-illustration.png";
import { useState } from "react";
import { auth } from "../../../auth/firebase-config";

export function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[570px]">
        <div className="flex items-center justify-center py-12">
          <div className="mx-auto grid w-[350px] gap-6">
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
                <input
                  className="border-2 rounded-lg w-96 p-2"
                  type="email"
                  placeholder="admin@example.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <label htmlFor="password">Password</label>
                </div>
                <input
                  className="border-2 rounded-lg w-96 p-2"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                onClick={signIn}
                className="p-2 bg-custom-viollet text-custom-white  rounded-2xl"
              >
                Login
              </button>
            </div>
            <div className="mt-4 text-center text-sm">
              <p>
                Don't have an account? {/* <Link to={SignUpForm}></Link> */}
                Sign Up
              </p>
            </div>
          </div>
        </div>
        <div className="hidden bg-muted lg:block">
          <img src={medicalBanner} alt="image" />
        </div>
      </div>
    </>
  );
}
