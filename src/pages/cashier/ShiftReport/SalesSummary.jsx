import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const shiftData = {
  cashier: {
    fullName: "Sayan Shil",
  },
  shiftStart: "2025-12-01T09:30:00",
  shiftEnd: "2025-12-01T17:45:00",

  totalOrders: 42,
  totalSales: 18950.75,
  totalRefunds: 1250.0,
  netSales: 18950.75 - 1250.0,
};

function SalesSummary() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className={"text-xl font-semibold "}>
          Sales Summary
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-muted-foreground ">Total Orders:</span>
            <span className="font-medium">{shiftData.totalOrders}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-muted-foreground ">Total Sales:</span>
            <span className="font-medium text-green-700">
              +{shiftData.totalSales}
            </span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span className="text-muted-foreground ">Total Refund:</span>
            <span className="font-medium text-red-600">
              - {shiftData.totalRefunds}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-muted-foreground ">Net Sales:</span>
            <span
              className={`font-medium ${
                shiftData.netSales > 0
                  ? "text-green-600"
                  : shiftData.netSales < 0
                  ? "text-red-600"
                  : "text-gray-700"
              }`}
            >
              {shiftData.netSales}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default SalesSummary;
