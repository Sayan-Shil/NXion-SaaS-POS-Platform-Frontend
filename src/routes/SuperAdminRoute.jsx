import Branches from "@/pages/store/Branch/Branches";
import React from "react";
import { Route, Routes } from "react-router-dom";

import AdminLayout from "@/pages/super-admin/AdminLayout";
import AdminSettings from "@/pages/super-admin/AdminSettings/AdminSettings";
import AdminSubscription from "@/pages/super-admin/AdminSubscription/AdminSubscription";
import AdminExport from "@/pages/super-admin/AdminExport/AdminExport";
import AdminPendingRequest from "@/pages/super-admin/AdminPendingRequest/AdminPendingRequest";
import AdminDashboard from "@/pages/super-admin/AdminDashboard";
import AdminStore from "@/pages/super-admin/AdminStore/AdminStore";

function SuperAdminRoute() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="stores" element={<AdminStore />} />
        <Route path="pending-request" element={<AdminPendingRequest />} />
        <Route path="subscription" element={<AdminSubscription />} />
        <Route path="exports" element={<AdminExport />} />
        <Route path="settings" element={<AdminSettings />} />
      </Route>
    </Routes>
  );
}

export default SuperAdminRoute;
