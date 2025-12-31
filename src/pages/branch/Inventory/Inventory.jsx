import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import React, { useState } from "react";
import InventoryFormDialog from "./InventoryFormDialog";
import InventoryTable from "./InventoryTable";

function Inventory() {
  const [IsAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [selectedProductId,setSelectedProductId]= useState(1)
  const [ quantity,setQuantity] = useState(1)
  const [ isEditDialogOpen, setIsEditDialogOpen] = useState(false)

  const handleAddInventory =()=>{
    console.log(selectedProductId,quantity)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">
          Inventory Management
        </h1>
        <div className="flex gap-2">
          <Button onClick={() => setIsAddDialogOpen(true)}>
            <Plus />
            Add Inventory
          </Button>
        </div>
      </div>

      <InventoryTable setIsEditDialogOpen={setIsEditDialogOpen}/>

      <InventoryFormDialog
        open={isEditDialogOpen}
        onOpenChange={setIsEditDialogOpen}
        mode={"add"}
        selectedProductId={selectedProductId}
        setSelectedProductId={setSelectedProductId}
        quantity={quantity}
        setQuantity={setQuantity}
        onSubmit={handleAddInventory}
      />
    </div>
  );
}

export default Inventory;
