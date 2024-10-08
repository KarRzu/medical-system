import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { SignInForm } from "./components/features/sign-in/SignInForm";
import { SignUpForm } from "./components/features/sign-up/SignUpForm";
import { AuthProvider } from "./auth/AuthProvider";
import { ROUTES } from "./router/routes";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path={ROUTES.signIn} element={<SignInForm />} />
            <Route path={ROUTES.signUp} element={<SignUpForm />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
