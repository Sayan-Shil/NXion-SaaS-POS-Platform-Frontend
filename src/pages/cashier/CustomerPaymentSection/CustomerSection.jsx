import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Edit, PhoneCall, User, User2 } from "lucide-react";
import React, { useState } from "react";
import CustomerDialog from "./CustomerDialog";

function CustomerSection() {
  let selectedCustomer = {
    fullname: "Sayan Shil",
    phone: "+91 86976 92502",
  };

  selectedCustomer=null;


  const[showCustomerDialog, setShowCustomerDialog] =useState(false);



  return (
    <div className="p-4 border-b">
      <h2 className="text-lg font-semibold mb-3 flex items-center">
        <User className="w-5 h-5 mr-2" />
        Customer
      </h2>
      {selectedCustomer ? (
        <Card
          className={
            "border-violet-400 bg-violet-50 dark:bg-violet-900 dark:border-violet-800 "
          }
        >
          <CardContent className={"p-3 flex items-center justify-between gap-5"}>
            <div>
              <h3 className="font-medium text-violet-800 dark:text-violet-300 flex items-center">
               <User2 className="w-4 h-4 mr-2"/> {selectedCustomer.fullname}
              </h3>
              <p className="text-sm text-violet-600 dark:text-violet-300 flex items-center">
               <PhoneCall className="w-4 h-4 mr-2"/> {selectedCustomer.phone}
              </p>
            </div>
            <div>
              <Button variant={"outline"} size={"sm"} className={"mt-2 w-full"}>
             <Edit/>
            </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div>
          <Button onClick={()=>setShowCustomerDialog(true)} variant={"outline"} className={"w-full py-5"}>Select Customer</Button>
        </div>
      )}

      <CustomerDialog 
  showCustomerDialog={showCustomerDialog}
  setShowCustomerDialog={setShowCustomerDialog}
/>
    </div>
  );
}

export default CustomerSection;
