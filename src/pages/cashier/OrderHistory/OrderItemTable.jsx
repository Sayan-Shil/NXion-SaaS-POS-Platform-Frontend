import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IndianRupee } from "lucide-react";

function OrderItemTable({ selectedOrder }) {
    if (!selectedOrder) {
    return (
      <Card>
        <CardContent className="p-4 text-muted-foreground">
          No order selected
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Order Items</CardTitle>
      </CardHeader>

      <CardContent>
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
                    <span className="font-medium">{item.product.name.slice(0,15)}....</span>
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
      </CardContent>
    </Card>
  );
}

export default OrderItemTable;
