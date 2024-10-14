import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { SignInForm } from "./components/features/sign-in/SignInForm";
import { SignUpForm } from "./components/features/sign-up/SignUpForm";
import { AuthProvider } from "./auth/AuthProvider";
import { ROUTES } from "./router/routes";
import { Layout } from "./components/shared/Layout";
import { DashboardPage } from "./pages/DashboardPage";
import { PatientsPage } from "./pages/PatientsPage";
import { DoctorsPage } from "./pages/DoctorsPage";
import { LaboratoristPage } from "./pages/LaboratoristPage";
import { CalendarPage } from "./pages/CalendarPage";
import { ProfilePage } from "./pages/ProfilePage";
import { SettingsPage } from "./pages/SettingsPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Providers } from "./auth/Providers";

function App() {
  return (
    <>
      <Providers>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path={ROUTES.signIn} element={<SignInForm />} />
              <Route path={ROUTES.signUp} element={<SignUpForm />} />
              <Route element={<Layout />}>
                <Route index element={<DashboardPage />} />
                <Route path={ROUTES.patients} element={<PatientsPage />} />
                <Route path={ROUTES.doctors} element={<DoctorsPage />} />
                <Route
                  path={ROUTES.laboratorist}
                  element={<LaboratoristPage />}
                />
                <Route path={ROUTES.calendar} element={<CalendarPage />} />
                <Route path={ROUTES.profile} element={<ProfilePage />} />
                <Route path={ROUTES.settings} element={<SettingsPage />} />
              </Route>
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </Providers>
    </>
  );
}

export default App;
