import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import { IndianRupee } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

function RefundOrderDetail({ handleSelectOrder, selectedOrder }) {
  return (
    <div className="w-1/2 border-r py-4 px-2">
      <div className="mb-4 ">
        <Button onClick={() => handleSelectOrder(null)}>
          {" "}
          <ChevronLeft /> Back To Order Table
        </Button>
      </div>

      <Card>
        <CardContent>
          <div className="flex justify-between items-start mb-4">
            <div className="flex flex-col">
              <h2 className="font-semibold text-lg">
                Order {selectedOrder.id}
              </h2>
              <p className="text-sm text-gray-500">{selectedOrder.createdAt}</p>
            </div>

            <Badge variant={"outline"}>{selectedOrder.paymentType}</Badge>
          </div>
          <div className="mb-4">
            <h3 className="font-medium text-sm text-muted-foreground mb-2">{selectedOrder?.customer?.fullName}</h3>
            <h3 className="text-sm">{selectedOrder?.customer?.phone}</h3>
          </div>

          <div>
            <h2 className="font-medium text-sm text-muted-foreground mb-2 ">Order Summary</h2>
            <div className="text-sm">
              <div className="flex justify-between">
                <span> Total Orders: {selectedOrder?.items.length}</span>
              </div>
              <div className="flex justify-between">
                <span> Total Amount:  ₹{selectedOrder?.totalAmount}</span>
              </div>
              
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex-1  overflow-auto mt-10 ml-2">
      
        <h2 className="text-xl font-semibold">Order Items</h2>
        <Table className="table-auto w-full">
          <TableHeader className="bg-gradient-to-r from-violet-50 to-violet-100">
            <TableRow>
              <TableHead className="text-violet-700 font-semibold">Image</TableHead>
              <TableHead className="text-violet-700 font-semibold">Item</TableHead>
              {/* Group columns to the right */}
              <TableHead className="text-right text-violet-700 font-semibold">Qty</TableHead>
              <TableHead className="text-right text-violet-700 font-semibold">Price</TableHead>
              <TableHead className="text-right text-violet-700 font-semibold">Total</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {selectedOrder.items.map((item, i) => (
              <TableRow
                key={item.id}
                className={`transition hover:bg-violet-100 ${
                  i % 2 !== 0 ? "bg-violet-100/30" : ""
                }`}
              >
                {/* Image */}
                <TableCell>
                  <img
                    src={item.product.image}
                    className="w-10 h-10 object-cover rounded-md"
                  />
                </TableCell>

                {/* Item Multi-line */}
                <TableCell className="align-top">
                  <div className="flex flex-col max-w-[260px] wrap-break-word leading-tight">
                    <span className="font-medium">{item.product.name.slice(0,30)}....</span>
                    <span className="text-xs text-gray-500">
                      ({item.product.sku})
                    </span>
                  </div>
                </TableCell>

                {/* Quantity RIGHT */}
                <TableCell className="text-right">{item.quantity}</TableCell>

                {/* Price RIGHT */}
                <TableCell className="text-right whitespace-nowrap">
                  <span className="inline-flex gap-1 items-center justify-end">
                    <IndianRupee className="w-3 h-3" />
                    {item.product.sellingPrice.toFixed(2)}
                  </span>
                </TableCell>

                {/* Total RIGHT */}
                <TableCell className="text-right whitespace-nowrap">
                  <span className="inline-flex gap-1 items-center justify-end">
                    <IndianRupee className="w-3 h-3" />
                    {(item.product.sellingPrice * item.quantity).toFixed(2)}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default RefundOrderDetail;
