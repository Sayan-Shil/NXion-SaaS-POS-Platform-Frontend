import React, { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";

function Products() {
  const [isAddDialogOpen, setAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setEditDialogOpen] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState(null);

  const handleAddBranch = (values) => {
    console.log("Branch Data:", values);
    setAddDialogOpen(false);
  };

  const handleEdit = (branch) => {
    setSelectedBranch(branch);
    setEditDialogOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">
          Product Management
        </h1>

        <Dialog open={isAddDialogOpen} onOpenChange={setAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add Product
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Product</DialogTitle>
            </DialogHeader>

            <div className="h-[70vh] overflow-y-auto p-2">
                <ProductForm onSubmit={handleAddBranch} isEditing={false} />
            </div>
          </DialogContent>
        </Dialog>
      </div>

  
       <div className="overflow-x-auto border rounded-lg">
            <ProductTable onEdit={handleEdit} />
       </div>

      <Dialog open={isEditDialogOpen} onOpenChange={setEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Branch</DialogTitle>
          </DialogHeader>

          <ProductForm
            onSubmit={handleAddBranch}
            isEditing
            defaultValues={selectedBranch}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Products;
