import { Check, Edit, Plus, Trash, X } from "lucide-react";
import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AddPlanDialog from "./AddPlanDialog";
import EditPlanDialog from "./EditPlanDialog";

const plans = [
  {
    id: 1,
    name: "Basic",
    price: 499,
    billingCycle: "MONTHLY",
    branches: 20,
    users: 75,
    products: 1020,
    status: "Active",
  },
];

function AdminSubscription() {


  const [openAddNewPlan,setAddNewPlan] = useState(false)
  const [openEditNewPlan,setEditNewPlan] = useState(false)
  const handleAccept = (id) => {
    console.log("Accepted store id:", id);
  };

  const handleReject = (id) => {
    console.log("Rejected store id:", id);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">
          Subscription Plans
        </h1>

        <Button onClick={()=>setAddNewPlan(true)} className="flex items-center gap-1">
          <Plus className="h-4 w-4" />
          Add New Plan
        </Button>
      </div>

      <Card>
        <CardContent className="p-0 m-8">
          <Table className=" w-full">
            <TableHeader className="bg-gray-200">
              <TableRow>
                <TableHead className=" font-semibold  ">
                Name
                </TableHead>
                <TableHead className=" font-semibold">
                Price
                </TableHead>
                <TableHead className=" font-semibold">
                Billing Cycle
                </TableHead>
                <TableHead className=" font-semibold">
                Branches
                </TableHead>
                <TableHead className=" font-semibold">
                 Users
                </TableHead>
                <TableHead className=" font-semibold">
                Products
                </TableHead>
                <TableHead className=" font-semibold">
                 Status
                </TableHead>
                <TableHead className=" font-semibold">
                Features
                </TableHead>
                <TableHead className="text-right  font-semibold">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {plans.map((plan) => (
                <TableRow
                  key={plan.id}
                  
                >
                  <TableCell className="font-medium">
                    {plan.name}
                  </TableCell>

                  <TableCell className="text-sm text-gray-600">
                   ₹{plan.price}
                  </TableCell>

                        <TableCell className="text-sm text-gray-600 capitalize">
                   {plan.billingCycle}
                  </TableCell>

                  <TableCell className={"text-sm text-gray-600"}>{plan.branches}</TableCell>

                  <TableCell className="text-sm text-gray-600">
                    {plan.users}
                  </TableCell>

                   <TableCell className="text-sm text-gray-600">
                    {plan.products}
                  </TableCell>

                    <TableCell className="text-sm text-gray-600">
                    {plan.status}
                  </TableCell>

                  <TableCell>{"Feature"}</TableCell>

                  

                  <TableCell className="text-right space-x-2">
                    <Button
                      onClick={() => setEditNewPlan(true)}
                      variant="outline"
                    
                      size={"icon"}
                    >
                      <Edit className="h-4 w-4 mr-1" />
                    
                    </Button>

                    <Button
                      onClick={() => handleReject(item.id)}
                      variant="outline"
                     
                      size={"icon"}
                    >
                      <Trash className="h-4 w-4" />
                      
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <AddPlanDialog open={openAddNewPlan} onOpenChange={setAddNewPlan} />
      <EditPlanDialog open={openEditNewPlan} onOpenChange={setEditNewPlan} />
    </div>
  );
}

export default AdminSubscription;
