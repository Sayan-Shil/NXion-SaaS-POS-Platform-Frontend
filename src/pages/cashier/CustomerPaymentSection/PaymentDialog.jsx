import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { IndianRupee } from "lucide-react";
import React, { useState } from "react";

const paymentMethods = [
  { id: 1, name: "Card", key: "CARD" },
  { id: 2, name: "UPI", key: "UPI" },
  { id: 3, name: "Cash", key: "CASH" },
];

function PaymentDialog({showPaymentDialog, setShowPaymentDialog}) {


    const [paymentMethod,setpaymentMethod] = useState("UPI");

  return (
    <Dialog open={showPaymentDialog} onOpenChange={setShowPaymentDialog}>
  <DialogContent className="rounded-2xl px-7 py-6 shadow-2xl border bg-white/90 backdrop-blur-xl">

    {/* Header */}
    <DialogHeader className="pb-4 border-b flex justify-between items-center">
      <DialogTitle className="text-xl font-bold tracking-wide text-gray-900">
        Payment
      </DialogTitle>
    </DialogHeader>

    {/* Amount */}
    <div className="text-center py-3">
      <h1 className="font-extrabold text-4xl text-violet-600 dark:text-violet-300 flex items-center justify-center gap-1">
        <IndianRupee size={22} className="opacity-90" /> 8,999
      </h1>
      <p className="mt-1 text-sm font-medium text-gray-500 tracking-wide">
        Amount to be Paid
      </p>
    </div>

    {/* Payment Options */}
    <div className="mt-6 flex flex-col gap-3">
      {paymentMethods.map((method) => {
        const active = paymentMethod === method.key;
        return (
          <Button
            key={method.id}
            onClick={() => setpaymentMethod(method.key)}
            className={`
              w-full h-14 rounded-xl text-base font-semibold tracking-wide flex items-center justify-between px-5
              transition-all duration-200 border
              ${
                active
                  ? "bg-violet-600 border-violet-700 text-white shadow-lg"
                  : "bg-white border-gray-300 text-gray-700 hover:border-violet-400 hover:text-violet-500 hover:bg-violet-50 hover:shadow-sm "
              }
            `}
          >
            {method.name}

            {active && <div className="w-2.5 h-2.5 bg-white rounded-full shadow-sm"></div>}
          </Button>
        );
      })}
    </div>

  </DialogContent>
</Dialog>



  );
}

export default PaymentDialog;
