import React from "react";
import ShiftReportHeader from "./ShiftReportHeader";
import ShiftInformation from "./ShiftInformation";
import SalesSummary from "./SalesSummary";
import PaymentSummaryCard from "./PaymentSummaryCard";
import TopSellingItemCard from "./TopSellingItemCard";
import RecentOrderTable from "./RecentOrderTable";
import RefundTable from "./RefundTable";

function ShiftSummaryPage() {
  return (
    <div className="h-full flex flex-col ">
      <ShiftReportHeader />
      <div className="flex-1 overflow-auto p-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <ShiftInformation />
          <SalesSummary />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <PaymentSummaryCard />
          <TopSellingItemCard />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <RecentOrderTable />
          <RefundTable />
        </div>
      </div>
    </div>
  );
}

export default ShiftSummaryPage;
