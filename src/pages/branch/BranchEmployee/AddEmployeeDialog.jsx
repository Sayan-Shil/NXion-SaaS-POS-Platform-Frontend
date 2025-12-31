import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusIcon } from "lucide-react";
import React from "react";
import EmployeeForm from "./EmployeeForm";
const roles= [
    "BRANCH_CASHIER",
    "BRANCH_ADMIN",
    "BRANCH_MANAGER"
]
function AddEmployeeDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <PlusIcon className="w-4 h-4" />
          Add Icon
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Employee</DialogTitle>
        </DialogHeader>
        <EmployeeForm roles={roles}/>
      </DialogContent>
    </Dialog>
  );
}

export default AddEmployeeDialog;
