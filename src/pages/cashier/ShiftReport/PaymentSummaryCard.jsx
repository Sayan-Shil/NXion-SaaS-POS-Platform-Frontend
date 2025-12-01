import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CreditCardIcon,
  IndianRupee,
  QrCodeIcon,
  Wallet,
  Wallet2Icon,
  WalletCards,
} from "lucide-react";

const shiftData = {
  cashier: {
    fullName: "Sayan Shil",
  },

  shiftStart: "2025-12-01T09:30:00",
  shiftEnd: "2025-12-01T17:45:00",

  totalOrders: 42,
  totalSales: 18950.75,
  totalRefunds: 1250.0,

  paymentSummaries: [
    {
      type: "CASH",
      totalAmount: 2999,
      transactionCount: 6,
    },
    {
      type: "CARD",
      totalAmount: 8900,
      transactionCount: 12,
    },
    {
      type: "UPI",
      totalAmount: 6750.75,
      transactionCount: 24,
    },
  ],
};

function PaymentSummaryCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className={"text-xl font-semibold "}>
          Payment Summary
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {shiftData.paymentSummaries.map((payment) => (
            <div className="flex items-start mb-3" key={payment.type}>
              {/* ICON */}
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                {payment.type === "CASH" ? (
                  <Wallet />
                ) : payment.type === "UPI" ? (
                  <QrCodeIcon />
                ) : (
                  <CreditCardIcon />
                )}
              </div>

              {/* CONTENT */}
              <div className="flex-1">
                {/* top row */}
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-semibold">{payment.type}</span>
                    <p className="text-xs text-muted-foreground">
                      {payment.transactionCount} transactions
                    </p>
                  </div>

                  <span className="font-bold text-lg flex items-center">
                  <IndianRupee className="w-4 h-4 mr-1"/>  {(payment.totalAmount).toFixed(2)}
                  </span>
                </div>

                {/* bottom row */}
                <div className="flex justify-end text-xs text-muted-foreground">
                  <span> 
                    {(
                      (payment.totalAmount / shiftData.totalSales) *
                      100
                    ).toFixed(2)}
                    %
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default PaymentSummaryCard;
