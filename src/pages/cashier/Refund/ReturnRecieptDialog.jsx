import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IndianRupee, PrinterIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

function ReturnRecieptDialog({
  selectedOrder,
  showReturnRecieptDialog,
  setShowReturnRecieptDialog,
}) {
  return (
    <Dialog
      open={showReturnRecieptDialog}
      onOpenChange={setShowReturnRecieptDialog}
    >
      <DialogContent className="max-w-lg rounded-lg shadow-xl">

        <DialogHeader>
          <DialogTitle className="text-xl font-bold tracking-wide text-center">
            Return Receipt
          </DialogTitle>
        </DialogHeader>

        <div className="bg-background max-h-[450px] overflow-y-auto p-2">

          <div className="text-center mb-4 space-y-1">
            <h3 className="font-extrabold text-xl">Kolkata Branch</h3>
            <p className="text-sm text-muted-foreground">123 Main Street, City</p>
            <p className="text-sm text-muted-foreground">Tel: +91 123 456 789</p>
          </div>

          <hr className="my-3" />

          <div className="grid grid-cols-2 mb-3">
            <div className="space-y-1">
              <p className="font-semibold text-sm">
                Return # RTN-{Date.now().toString().slice(-6)}
              </p>
              <p className="text-sm">Order ID: {selectedOrder.id}</p>
              <p className="text-sm">{new Date().toLocaleString()}</p>
              <p className="text-sm font-semibold">
                {selectedOrder.customer?.fullName}
              </p>
            </div>

            <div className="text-right">
              <span className="inline-block px-3 py-1 border rounded-md text-xs font-medium bg-violet-50 text-violet-700">
                {selectedOrder.paymentType}
              </span>
            </div>
          </div>

          <hr className="my-3" />

          <Table className="table-auto w-full border">
            <TableHeader className="bg-gradient-to-r from-violet-50 to-violet-100">
              <TableRow>
                <TableHead className="font-semibold text-violet-700">Image</TableHead>
                <TableHead className="font-semibold text-violet-700">Item</TableHead>
                <TableHead className="text-right font-semibold text-violet-700">Qty</TableHead>
                <TableHead className="text-right font-semibold text-violet-700">Price</TableHead>
                <TableHead className="text-right font-semibold text-violet-700">Total</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {selectedOrder.items.map((item, i) => {
                const total = item.product.sellingPrice * item.quantity;
                return (
                  <TableRow
                    key={item.id}
                    className={`${i % 2 !== 0 ? "bg-violet-50" : ""} transition`}
                  >
                    <TableCell>
                      <img
                        src={item.product.image}
                        className="w-10 h-10 object-cover rounded-md ring-1 ring-gray-200"
                      />
                    </TableCell>

                    <TableCell>
                      <div className="flex flex-col leading-tight max-w-[200px]">
                        <span className="font-medium text-sm">
                          {item.product.name.length > 28
                            ? item.product.name.slice(0, 28) + "..."
                            : item.product.name}
                        </span>
                        <span className="text-xs text-gray-500">
                          ({item.product.sku})
                        </span>
                      </div>
                    </TableCell>

                    <TableCell className="text-right text-sm">
                      {item.quantity}
                    </TableCell>

                    <TableCell className="text-right text-sm">
                      <span className="inline-flex items-center gap-1">
                        <IndianRupee className="w-3 h-3" />
                        {item.product.sellingPrice.toFixed(2)}
                      </span>
                    </TableCell>

                    <TableCell className="text-right text-sm">
                      <span className="inline-flex items-center gap-1 font-medium">
                        <IndianRupee className="w-3 h-3" />
                        {total.toFixed(2)}
                      </span>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>

          <hr className="my-3" />

          <div className="text-right text-lg font-bold">
            Total Refund: ₹{selectedOrder.totalAmount.toFixed(2)}
          </div>
        </div>
        <DialogFooter>
            <Button>
                <PrinterIcon className="w-4 h-4 mr-2"/>
                Print & Continue
            </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ReturnRecieptDialog;
