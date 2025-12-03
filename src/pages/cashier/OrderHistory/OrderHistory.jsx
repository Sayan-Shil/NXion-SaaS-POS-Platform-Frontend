import React, { useState } from "react";
import OrderTable from "./OrderTable";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import OrderDetail from "./OrderDetail";
import { Button } from "@/components/ui/button";
import { Bold, Download } from "lucide-react";

function OrderHistory() {
  const [showOrderInvoiceDialog, setShowOrderInvoiceDialog] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleViewOrderDetails = (order) => {
    setSelectedOrder(order);
    setShowOrderInvoiceDialog(true);
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 p-4 overflow-auto">
        <OrderTable handleViewOrderDetails={handleViewOrderDetails} />
      </div>
      <Dialog
        open={showOrderInvoiceDialog}
        onOpenChange={setShowOrderInvoiceDialog}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle className={"font-Bold"}>Order Invoice</DialogTitle>
          </DialogHeader>
          {selectedOrder ? (
            <OrderDetail selectedOrder={selectedOrder} />
          ) : (
            <p className="text-sm text-gray-500">Loading order details...</p>
          )}
          <DialogFooter>
            <Button>
              <Download />
              Download PDF
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default OrderHistory;
