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
import { Image, PhoneOutgoing, X } from "lucide-react";

const loading = false;

const ProductForm = ({
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

  const categoryList = [{ id: 5, name: "Pants" }];

  const handleImageChange = (e, setFieldValue) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const previewUrl = URL.createObjectURL(file);
    setFieldValue("image", previewUrl);
  };

  return (
    <Formik
      initialValues={defaultValues}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {(formik) => {
        const { values, isSubmitting, setFieldValue } = formik;

        return (
          <Form className="space-y-4 py-2 pr-2">

            <div className="flex flex-wrap gap-5">
              {!values.image ? (
                <>
                  <input
                    type="file"
                    accept="image/*"
                    id="fileInput"
                    hidden
                    onChange={(e) =>
                      handleImageChange(e, setFieldValue)
                    }
                  />
                  <label htmlFor="fileInput" className="relative">
                    <span className="w-24 h-24 cursor-pointer flex items-center justify-center p-3 border rounded-md border-gray-400">
                      <Image className="text-gray-700" />
                    </span>
                  </label>
                </>
              ) : (
                <div className="relative">
                  <img
                    className="w-24 h-24 object-cover"
                    src={values.image}
                    alt="Product"
                  />
                  <Button
                    type="button"
                    onClick={() => setFieldValue("image", null)}
                    className="absolute top-0 right-0"
                    size="icon"
                    variant="ghost"
                  >
                    <X />
                  </Button>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">
                Image URL
              </label>
              <Field as={Input} name="image" />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">
                Product Name
              </label>
              <Field as={Input} name="name" />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">
                SKU
              </label>
              <Field as={Input} name="sku" />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">
                Brand
              </label>
              <Field as={Input} name="brand" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium">
                  Category
                </label>
                <Field name="categoryId">
                  {({ field }) => (
                    <Select
                      value={field.value}
                      onValueChange={(value) =>
                        setFieldValue("categoryId", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categoryList.map((category) => (
                          <SelectItem
                            key={category.id}
                            value={category.id.toString()}
                          >
                            {category.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                </Field>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium">
                  Color
                </label>
                <Field as={Input} name="color" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium">
                  MRP
                </label>
                <Field as={Input} type="number" name="mrp" />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium">
                  Selling Price
                </label>
                <Field as={Input} type="number" name="sellingPrice" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">
                Description
              </label>
              <Field as={Textarea} name="description" rows={3} />
            </div>

            <div className="flex justify-end gap-3 pt-4">
              {onCancel && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={onCancel}
                >
                  Cancel
                </Button>
              )}
              <Button
                type="submit"
                disabled={isSubmitting || loading}
              >
                {isEditing ? "Update Product" : "Add Product"}
              </Button>
            </div>

          </Form>
        );
      }}
    </Formik>
  );
};

export default ProductForm;
