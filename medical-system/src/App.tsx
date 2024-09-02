import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { SignInForm } from "./components/features/sign-in/SignInForm";
import { SignUpForm } from "./components/features/sign-up/SignUpForm";
import { DashboardPage } from "./pages/DashboardPage";
import { PatientsPage } from "./pages/PatientsPage";
import { DoctorsPage } from "./pages/DoctorsPage";
import { ROUTES } from "./router/routes";
import { Layout } from "./components/shared/Layout";
import { LaboratoristPage } from "./pages/LaboratoristPage";
import { CalendarPage } from "./pages/CalendarPage";
import { ProfilePage } from "./pages/ProfilePage";
import { SettingsPage } from "./pages/SettingsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/sign-up" element={<SignUpForm />} />
        <Route path="/sign-in" element={<SignInForm />} />
        <Route element={<Layout />}>
          {" "}
          {/* Layout jako kontener */}
          <Route index element={<DashboardPage />} />
          <Route path={ROUTES.patients} element={<PatientsPage />} />
          <Route path={ROUTES.doctors} element={<DoctorsPage />} />
          <Route path={ROUTES.laboratorist} element={<LaboratoristPage />} />
          <Route path={ROUTES.calendar} element={<CalendarPage />} />
          <Route path={ROUTES.profile} element={<ProfilePage />} />
          <Route path={ROUTES.settings} element={<SettingsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
