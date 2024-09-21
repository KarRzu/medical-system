<<<<<<< HEAD
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
=======
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { SignInForm } from "./components/features/sign-in/SignInForm";
import { SignUpForm } from "./components/features/sign-up/SignUpForm";
import { DashboardPage } from "./pages/DashboardPage";
import { PatientsPage } from "./pages/PatientsPage";
import { DoctorsPage } from "./pages/DoctorsPage";
import { ROUTES } from "./router/routes";
import { Layout } from "./components/shared/Layout";
>>>>>>> 08656e948bfa83d1e4c9e9a5c9e2bf2719d319df
import { LaboratoristPage } from "./pages/LaboratoristPage";
import { CalendarPage } from "./pages/CalendarPage";
import { ProfilePage } from "./pages/ProfilePage";
import { SettingsPage } from "./pages/SettingsPage";
import { NotFoundPage } from "./pages/NotFoundPage";
<<<<<<< HEAD
import { Provider } from "react-redux";
import { store } from "./state/store";

function App() {
  return (
    <>
      {/* <Provider store={store}> */}
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path={ROUTES.signIn} element={<SignInForm />} />
            <Route path={ROUTES.signUp} element={<SignUpForm />} />
            <Route element={<Layout />}>
              Layout jako kontener
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
      {/* </Provider> */}
    </>
=======

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/sign-up" element={<SignUpForm />} />
        <Route path="/sign-in" element={<SignInForm />} />
        <Route element={<Layout />}>
          {/* Layout jako kontener */}
          <Route index element={<DashboardPage />} />
          <Route path={ROUTES.patients} element={<PatientsPage />} />
          <Route path={ROUTES.doctors} element={<DoctorsPage />} />
          <Route path={ROUTES.laboratorist} element={<LaboratoristPage />} />
          <Route path={ROUTES.calendar} element={<CalendarPage />} />
          <Route path={ROUTES.profile} element={<ProfilePage />} />
          <Route path={ROUTES.settings} element={<SettingsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
>>>>>>> 08656e948bfa83d1e4c9e9a5c9e2bf2719d319df
  );
}

export default App;
