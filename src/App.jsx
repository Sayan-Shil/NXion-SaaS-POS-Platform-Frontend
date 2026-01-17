import { Routes, Route, Navigate } from "react-router-dom";
import StoreRoute from "./routes/StoreRoute";
import BranchRoute from "./routes/BranchRoute";
import CashierRouter from "./routes/CashierRouter";
import AdminLayout from "./pages/super-admin/AdminLayout";
import SuperAdminRoute from "./routes/SuperAdminRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/super-admin"} />} />
      <Route path="/store/*" element={<StoreRoute />} />
      <Route path="/branch/*" element={<BranchRoute />} />
      <Route path="/cashier/*" element={<CashierRouter />} />
      <Route path="/super-admin/*" element={<SuperAdminRoute />} />
    </Routes>
  );
}

export default App;
