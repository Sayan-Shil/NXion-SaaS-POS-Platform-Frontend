import React, { useState } from "react";


import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import CategoryForm from "./CategoryForm";
import CategoryTable from "./CategoryTable";

function Categories() {
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
          Category Management
        </h1>

        <Dialog open={isAddDialogOpen} onOpenChange={setAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add Category
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Category</DialogTitle>
            </DialogHeader>

            <CategoryForm onSubmit={handleAddBranch} isEditing={false} />
          </DialogContent>
        </Dialog>
      </div>

  
       <div className="overflow-x-auto border rounded-lg">
            <CategoryTable onEdit={handleEdit} />
       </div>

      <Dialog open={isEditDialogOpen} onOpenChange={setEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Category</DialogTitle>
          </DialogHeader>

          <CategoryForm
            onSubmit={handleAddBranch}
            isEditing
            defaultValues={selectedBranch}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Categories;
