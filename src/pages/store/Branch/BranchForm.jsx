import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DialogClose } from "@/components/ui/dialog";
import { Field, Form, Formik } from "formik";

function BranchForm({ onSubmit, initialValues, isEditing }) {
  const loading = false;

  return (
    <Formik
      initialValues={
        initialValues || {
          name: "",
          address: "",
          manager: "",
          phone: "",
        }
      }
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Branch Name</Label>
              <Field
                as={Input}
                id="name"
                name="name"
                placeholder="Enter Branch Name"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="address">Branch Address</Label>
              <Field
                as={Input}
                id="address"
                name="address"
                placeholder="Enter Branch Address"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="manager">Branch Manager</Label>
              <Field
                as={Input}
                id="manager"
                name="manager"
                placeholder="Branch Manager Name"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="phone">Phone</Label>
              <Field
                as={Input}
                id="phone"
                name="phone"
                placeholder="Phone Number"
              />
            </div>

            <div className="flex justify-end gap-3 pt-4">
              
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </DialogClose>

              <Button type="submit" disabled={isSubmitting || loading}>
                {isSubmitting || loading
                  ? isEditing
                    ? "Updating..."
                    : "Adding..."
                  : isEditing
                  ? "Update Branch"
                  : "Add Branch"}
              </Button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default BranchForm;
