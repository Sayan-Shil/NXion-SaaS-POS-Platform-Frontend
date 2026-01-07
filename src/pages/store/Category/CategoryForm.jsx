import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DialogClose } from "@/components/ui/dialog";
import { Field, Form, Formik } from "formik";
import { Textarea } from "@/components/ui/textarea";

function CategoryForm({ onSubmit, initialValues, isEditing }) {
  const loading = false;

  return (
    <Formik
      initialValues={
        initialValues || {
          name: "",
          description: "",
        }
      }
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Category Name</Label>
              <Field
                as={Input}
                id="name"
                name="name"
                placeholder="Enter Category Name"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="address">Description</Label>
              <Field
                as={Textarea}
                id="description"
                name="description"
                placeholder="Enter Category Description"
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
                  ? "Update Category"
                  : "Add Category"}
              </Button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default CategoryForm;
