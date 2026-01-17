import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Formik } from "formik";
import React from "react";
import PlanForm from "./PlanForm";

function AddPlanDialog({ open, onOpenChange, onSuccess }) {
  const initialValues = {
    name: "",
    description: "",
    price: "",
    billingCycle: "",
    maxBranches: "",
    maxUsers: "",
    maxProducts: "",
    enableAdvancedReports: false,
    enableInventory: false,
    enableIntegrations: false,
    enableEcommerce: false,
    enableInvoiceBranding: false,
    prioritySupport: false,
    enableMultiLocation: false,
    extraFeatures: [""],
  };

  const handleSubmit = (values) => {
    console.log(values, values);
  };
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className={"font-bold text-2xl tracking-tight"}>Add Subscription</DialogTitle>
        </DialogHeader>

        <Formik  initialValues={initialValues} onSubmit={handleSubmit}>
         
         {(props)=><PlanForm {...props}/>}
        </Formik>
      </DialogContent>
    </Dialog>
  );
}

export default AddPlanDialog;
