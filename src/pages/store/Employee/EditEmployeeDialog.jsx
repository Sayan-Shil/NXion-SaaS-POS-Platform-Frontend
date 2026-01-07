import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import React from "react";
import EmployeeForm from "./EmployeeForm";

const roles = [
  "BRANCH_CASHIER",
  "BRANCH_ADMIN",
  "BRANCH_MANAGER",
];

function EditEmployeeDialog({ open, onOpenChange, selectedEmployee }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Employee</DialogTitle>
        </DialogHeader>

        <EmployeeForm
          roles={roles}
          initialData={selectedEmployee}
        />
      </DialogContent>
    </Dialog>
  );
}

export default EditEmployeeDialog;
