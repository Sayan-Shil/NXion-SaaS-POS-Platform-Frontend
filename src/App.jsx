// import { Route, Routes } from "react-router";
// import "./App.css";
// import CashierRouter from "./routes/CashierRouter";

// function App() {
//   return <>
//   <Routes>
//     <Route path="/cashier/*" element={<CashierRouter/>} />
//   </Routes>
  
//   </>;
// }

// export default App;

import { Routes, Route, Navigate } from "react-router-dom";
import CashierRouter from "./routes/CashierRouter";
import BranchLayout from "./pages/branch/BranchLayout/BranchLayout";
import BranchRoute from "./routes/BranchRoute";

function App() {
  return (
    <Routes>
      {/* <Route path="/cashier/*" element={<CashierRouter/>} /> */}
       <Route path="/*" element={<Navigate to={"/branch"}/>} />
      <Route path="/branch/*" element={<BranchRoute/>} />
    </Routes>
  );
}

export default App;

