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
  totalRefunds: 1250.00,      
  netSales: 18950.75 - 1250.00,      
};


function ShiftInformation() {
  const start = new Date(shiftData.shiftStart);
  const end = new Date(shiftData.shiftEnd);

  const durationMs = end - start; //
  const hours = Math.floor(durationMs / (1000 * 60 * 60));
  const minutes = Math.floor((durationMs / (1000 * 60)) % 60);

  return (
    <Card>
      <CardHeader>
        <CardTitle className={"text-xl font-semibold "}>
          Shift Information
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-muted-foreground ">Cashier:</span>
            <span className="font-medium">{shiftData.cashier.fullName}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-muted-foreground ">Shift Start:</span>
            <span className="font-medium">{shiftData.shiftStart}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-muted-foreground ">Shift End:</span>
            <span className="font-medium">
              {shiftData.shiftEnd ?? "ongoing"}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-muted-foreground ">Duration:</span>
            <span className="font-medium">{`${hours} hours ${minutes} minutes`}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default ShiftInformation;
