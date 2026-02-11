import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import StudentDashboard from "./dashboards/student/StudentDashboard";
import CompanyDashboardEntry from "./dashboards/company/CompanyDashboardEntry";
import CoordinatorDashboard from "./dashboards/coordinator/CoordinatorDashboard";
import CompanyDashboard from "./pages/company/CompanyDashboard";



function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/student" element={<StudentDashboard />} />
          <Route path="/coordinator" element={<CoordinatorDashboard />} />
          <Route path="/company/dashboard" element={<CompanyDashboard />} />

          <Route path="/company/dashboard-new" element={<CompanyDashboardEntry />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
