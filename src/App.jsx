import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import CompanyDashboardEntry from "./dashboards/company/CompanyDashboardEntry";
import CoordinatorDashboard from "./dashboards/coordinator/CoordinatorDashboard";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/coordinator" element={<CoordinatorDashboard />} />
          <Route path="/company/dashboard-new" element={<CompanyDashboardEntry />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
