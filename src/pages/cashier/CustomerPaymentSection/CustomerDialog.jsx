import { Button } from "@/components/ui/button";
import { Dialog, DialogFooter, DialogHeader } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { customers } from "@/data/customers";
import { DialogContent, DialogTitle } from "@/components/ui/dialog";
import React, { useState } from "react";
import CustomerForm from "./CustomerForm";

function CustomerDialog({ showCustomerDialog, setShowCustomerDialog }) {
  const [showCustomerForm, setShowCustomerForm] = useState(false);

  const handleSelectCustomer = (customer) => {
    console.log("Selected Customer:", customer);
    setShowCustomerDialog(false);
  };

  return (
    <Dialog open={showCustomerDialog} onOpenChange={setShowCustomerDialog}>
      <DialogContent className="max-w-2xl ">
        <DialogHeader>
          <DialogTitle>Select A Customer</DialogTitle>
        </DialogHeader>

        <div className="mb-2">
          <Input placeholder={"Search A Customer"} />
        </div>

        <div className="max-h-96 overflow-y-auto ">
          <div className="rounded-xl overflow-hidden border shadow-sm">
            <Table>
              <TableHeader className="bg-gradient-to-r from-violet-50 to-violet-100">
                <TableRow>
                  <TableHead className="text-violet-700 font-semibold">
                    Name
                  </TableHead>
                  <TableHead className="text-violet-700 font-semibold">
                    Phone
                  </TableHead>
                  <TableHead className="text-violet-700 font-semibold">
                    Email
                  </TableHead>
                  <TableHead className="text-right text-violet-700 font-semibold">
                    Action
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {customers.map((customer, i) => (
                  <TableRow
                    key={customer.id}
                    className={`transition hover:bg-violet-100 ${
                      i % 2 !== 0 ? "bg-violet-100/30" : ""
                    }`}
                  >
                    <TableCell className="font-medium text-gray-800 dark:text-gray-200">
                      {customer.fullName}
                    </TableCell>
                    <TableCell>{customer.phone}</TableCell>
                    <TableCell>{customer.email}</TableCell>

                    <TableCell className="text-right">
                      <Button
                        size="sm"
                        className="bg-violet-600 hover:bg-violet-700 text-white shadow-sm"
                        onClick={() => handleSelectCustomer(customer)}
                      >
                        Select
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
        <DialogFooter>
          <Button variant={"outline"}>Cancel</Button>
          <Button onClick={() => setShowCustomerForm(true)}>
            Add New Customer
          </Button>
        </DialogFooter>
        <CustomerForm
          showCustomerForm={showCustomerForm}
          setShowCustomerForm={setShowCustomerForm}
        />
      </DialogContent>
    </Dialog>
  );
}

export default CustomerDialog;
