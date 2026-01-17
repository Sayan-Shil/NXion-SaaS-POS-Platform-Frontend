import React from "react";
import AdminOverview from "./AdminOverview";
import StoreRegistrationChart from "./StoreRegistrationChart.jsx/StoreRegistrationChart";
import StoreStatusDistribution from "./Distribution/StoreStatusDistribution";

const branch = {
  name: "Kolkata Sub Branch",
  address: "Belgharia,Kolkata-56",
};
function AdminDashboard() {
  return (
    <div className="space-y-6 ">
      <div className="flex justify-between items-center">
       <div className="flex flex-col ">
         <h1 className="font-bold text-3xl tracking-tight">Branch Dashboard</h1>
        <p className="text-gray-500">Overview of All Stores</p>
       </div>
        {branch && <p className="text-gray-600 text-sm">{branch.name}</p>}
      </div>
      <AdminOverview />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <StoreRegistrationChart />
        <StoreStatusDistribution />
      </div>
    </div>
  );
}

export default AdminDashboard;
