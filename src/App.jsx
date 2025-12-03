import { Route, Routes } from "react-router";
import "./App.css";
import { Button } from "./components/ui/button";
import CreateOrder from "./pages/cashier/CreateOrder";
import CustomerLookup from "./pages/cashier/CustomerManagement/CustomerLookup";
import OrderHistory from "./pages/cashier/OrderHistory/OrderHistory";
import RefundPage from "./pages/cashier/Refund/RefundPage";
import ShiftSummaryPage from "./pages/cashier/ShiftReport/ShiftSummaryPage";
import CashierRouter from "./routes/CashierRouter";

function App() {
  return <>
  <Routes>
    <Route path="/cashier/*" element={<CashierRouter/>} />
  </Routes>
  
  </>;
}

export default App;
