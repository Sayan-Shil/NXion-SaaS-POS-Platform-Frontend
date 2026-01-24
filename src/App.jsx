import { Routes, Route, Navigate } from "react-router-dom";
import StoreRoute from "./routes/StoreRoute";
import BranchRoute from "./routes/BranchRoute";
import CashierRouter from "./routes/CashierRouter";
import AdminLayout from "./pages/super-admin/AdminLayout";
import SuperAdminRoute from "./routes/SuperAdminRoute";
import Login from "./pages/auth/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/super-admin"} />} />
      <Route path="/store/*" element={<StoreRoute />} />
      <Route path="/branch/*" element={<BranchRoute />} />
      <Route path="/cashier/*" element={<CashierRouter />} />
      <Route path="/super-admin/*" element={<SuperAdminRoute />} />
       <Route path="/login" element={<Login/>} />
    </Routes>
  );
}

export default App;
