import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";

const ReturnReasons = [
  "Wrong Product Delivered",
  "Product Damaged",
  "Item Defective or Not Working",
  "Missing Accessories",
  "Received Different Color/Variant",
  "Product Quality Not as Expected",
  "Size/Fit Issue",
  "Expired or Near-Expiry Product",
  "Wrong Quantity Received",
  "Customer Changed Mind",
  "Other",
];

const ReturnMethods = ["UPI", "BANK TRANSFER" , "CASH" , "DISCOUNT VOUCHER"]

function ReturnItemSection({selectedOrder,setShowReturnRecieptDialog}) {
  const [returnReason, setReturnReason] = useState("");
  const [otherReturnReason, setOtherReturnReason] = useState("");
  const [returnMethod, setReturnMethod] = useState("UPI");

  const processRefund= ()=>{
    setShowReturnRecieptDialog(true)
  }

  return (
    <div className="p-4 w-1/2">
      <Card className={"mt-4"}>
        <CardContent className={"p-4"}>
          <div className="space-y-4">
            <div>
              <Label className={"mb-2 block"}>Return Reason</Label>
              <Select
                value={returnReason}
                onValueChange={(value) => setReturnReason(value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={"Select A Reason"} />
                </SelectTrigger>
                <SelectContent>
                  {ReturnReasons.map((reason) => (
                    <SelectItem value={reason} key={reason}>
                      {reason}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {returnReason === "Other" && (
              <div>
                <Label className={"mb-2 block"}>Specify Reason</Label>
                <Textarea
                  id="Other-Reason"
                  placeholder="Please Specify Return reason"
                  value={otherReturnReason}
                  onChange={(e) => setOtherReturnReason(e.target.value)}
                />
              </div>
            )}
            <div>
                <Label className={"mb-2 block"}>
                    Refund Method
                </Label>
              <Select
                value={returnMethod}
                onValueChange={(value) => setReturnMethod(value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={"Select A Refund Method"} />
                </SelectTrigger>
                <SelectContent>
                  {ReturnMethods.map((method) => (
                    <SelectItem value={method} key={method}>
                      {method}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="pt-4 border-t">
                <div className="flex justify-between text-lg font-semibold pb-4">
                    <span className="font-bold">Total Refund Amount: </span>
                    <span>₹{selectedOrder?.totalAmount}</span>
                </div>

                <Button onClick={processRefund} className={"w-full"}>
                    Proceed Refund
                </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default ReturnItemSection;
