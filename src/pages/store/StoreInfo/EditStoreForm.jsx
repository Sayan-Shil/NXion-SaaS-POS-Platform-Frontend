import React from "react";
import { Formik, Form, Field } from "formik";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Image, X } from "lucide-react";
import { Label } from "@/components/ui/label";

const loading = false;

const EditStoreForm = ({
  initialValues,
  onSubmit,
  onCancel,
  isEditing = false,
}) => {
  const defaultValues = {
    name: "",
    sku: "",
    description: "",
    mrp: "",
    sellingPrice: "",
    brand: "",
    categoryId: "",
    color: "",
    image: null,
    ...(initialValues || {}),
  };

  const handleSubmit = async (values) => {
    console.log("values", values);
    onSubmit?.(values);
  };

  const storeTypeList = [
    { value: "Retail Store", label: "Retail Store" },
    { value: "Supermarket", label: "Supermarket" },
    { value: "Mall", label: "Mall" },
    { value: "Department Store", label: "Department Store" },
    { value: "Convenience Store", label: "Convenience Store" },
    { value: "Specialty Store", label: "Specialty Store" },
  ];

  const handleImageChange = (e, setFieldValue) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const previewUrl = URL.createObjectURL(file);
    setFieldValue("image", previewUrl);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {(formik) => {
        const { values, isSubmitting, setFieldValue } = formik;

        return (
          <Form className="space-y-4 py-2 pr-2">

            <div className="space-y-2">
              <label htmlFor="brand" className="block text-sm font-medium">
                Store Name *
              </label>
              <Field
                as={Input}
                id="brand"
                name="brand"
                placeholder="Enter Store name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="storeType" className="block text-sm font-medium">
                Type
              </Label>
              <Field name="storeType">
                {({ field }) => (
                  <Select
                    value={field.value}
                    onValueChange={(value) => setFieldValue("storeType", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select storeType" />
                    </SelectTrigger>
                    <SelectContent>
                      {storeTypeList.map((storeType) => (
                        <SelectItem
                          key={storeType.label}
                          value={storeType.value}
                        >
                          {storeType.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              </Field>
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="description"
                className="block text-sm font-medium"
              >
                Description
              </Label>
              <Field
                as={Textarea}
                id="description"
                name="description"
                placeholder="Enter Description"
              />
            </div>

            <div>
              <h1 className="text-ld font-medium mb-4">Contact Information</h1>
              <div className="space-y-4">
                <div>
                  <Label className="block text-sm font-medium">Address</Label>
                  <Field as={Textarea} type="number" id="contact.address" name="contact.address" placeholder="Enter Store Address" />
                </div>

                <div>
                  <Label className="block text-sm font-medium">Phone</Label>
                  <Field as={Input} type="number" id="contact.phone" name="contact.phone" placeholder="Enter Store Phone" />
                </div>

                <div>
                  <Label className="block text-sm font-medium">Email</Label>
                  <Field as={Textarea} type="number" id="contact.email" name="contact.email" placeholder="Enter Store Email" />
                </div>
              </div>
            </div>

        

            <div className="flex justify-end gap-3 pt-4">
              {onCancel && (
                <Button type="button" variant="outline" onClick={onCancel}>
                  Cancel
                </Button>
              )}
              <Button type="submit" disabled={isSubmitting || loading}>
                {isEditing ? "Update Product" : "Add Product"}
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default EditStoreForm;
