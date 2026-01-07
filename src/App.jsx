import { Routes, Route, Navigate } from "react-router-dom";
import StoreRoute from "./routes/StoreRoute";
import BranchRoute from "./routes/BranchRoute";
import CashierRouter from "./routes/CashierRouter";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/store"} />} />
      <Route path="/store/*" element={<StoreRoute />} />
      <Route path="/branch/*" element={<BranchRoute />} />
      <Route path="/cashier/*" element={<CashierRouter />} />
    </Routes>
  );
}

export default App;
