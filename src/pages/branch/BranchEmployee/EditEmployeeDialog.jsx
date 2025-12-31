import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { EditIcon, PlusIcon } from "lucide-react";
import React from "react";
import EmployeeForm from "./EmployeeForm";
const roles= [
    "BRANCH_CASHIER",
    "BRANCH_ADMIN",
    "BRANCH_MANAGER"
]
function EditEmployeeDialog({selectedEmployee,handleOpenEditDialog}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button onClick={handleOpenEditDialog} variant={"outline"}>
          <EditIcon className="w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Employee</DialogTitle>
        </DialogHeader>
        <EmployeeForm roles={roles} initialData={selectedEmployee}/>
      </DialogContent>
    </Dialog>
  );
}

export default EditEmployeeDialog;
