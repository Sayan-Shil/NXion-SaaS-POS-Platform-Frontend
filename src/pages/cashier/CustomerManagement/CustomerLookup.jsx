import React, { useState } from "react";
import CustomerSearch from "./CustomerSearch";
import CustomerList from "./CustomerList";
import CustomerDetail from "./CustomerDetail";
import PurchaseHistory from "./PurchaseHistory";
import { UserIcon } from "lucide-react";

function CustomerLookup() {
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const handleCustomerSelector = (customer) => {
    setSelectedCustomer(customer);
  };

  return (
    <div className="w-full flex flex-col">
      <div className="p-4 bg-card border-b">
        <h1 className="text-2xl font-bold ">Customer Management</h1>
      </div>
      <div className="flex-1 flex overflow-hidden">
        <div className="w-1/3 border-r flex flex-col ">
          <CustomerSearch />
          <CustomerList setSelectedCustomer={handleCustomerSelector} />
        </div>

        <div className="w-2/3 flex flex-col overflow-y-auto">
          {/* <CustomerDetail customer={selectedCustomer} />
                <PurchaseHistory customer={selectedCustomer}/> */}

          {selectedCustomer ? (
            <div>
              <CustomerDetail customer={selectedCustomer} />
              <PurchaseHistory customer={selectedCustomer} />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
              <UserIcon className="w-4 h-4 mr-1 mt-1" />
              <p className="mt-1">No Customer Selected</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CustomerLookup;
