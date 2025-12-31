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
import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";

const inventories = [
  {
    name: "white men shirt",
    quantity: 34,
    category: "shirt",
    sku: "SHIRT-MEN-WHITE",
  },
  {
    name: "black men shirt",
    quantity: 28,
    category: "shirt",
    sku: "SHIRT-MEN-BLACK",
  },
  {
    name: "blue denim jeans",
    quantity: 42,
    category: "jeans",
    sku: "JEANS-DENIM-BLUE",
  },
  {
    name: "running shoes",
    quantity: 19,
    category: "shoes",
    sku: "SHOES-RUNNING",
  },
  {
    name: "leather wallet",
    quantity: 55,
    category: "accessories",
    sku: "WALLET-LEATHER",
  },
];

function InventoryTable({setIsEditDialogOpen}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">
          Inventory Items
        </CardTitle>
      </CardHeader>

      <CardContent>
        <Table className="table-fixed w-full">
          <TableHeader className="bg-gradient-to-r from-violet-50 to-violet-100">
            <TableRow>
              <TableHead className="text-violet-700 font-semibold">
                Item
              </TableHead>
              <TableHead className="text-violet-700 font-semibold">
                SKU
              </TableHead>
              <TableHead className="text-violet-700 font-semibold">
                Category
              </TableHead>
              <TableHead className="text-right text-violet-700 font-semibold">
                Quantity
              </TableHead>
              <TableHead className="text-right text-violet-700 font-semibold">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {inventories.map((item, i) => (
              <TableRow
                key={item.sku}
                className={`transition hover:bg-violet-100 ${
                  i % 2 !== 0 ? "bg-violet-100/30" : ""
                }`}
              >
                <TableCell className="font-medium">
                  {item.name}
                </TableCell>
                <TableCell className="text-sm text-gray-500">
                  {item.sku}
                </TableCell>
                <TableCell className="capitalize">
                  {item.category}
                </TableCell>
                <TableCell className="text-right font-semibold">
                  {item.quantity}
                </TableCell>

                {/* EDIT BUTTON (added) */}
                <TableCell className="text-right">
                  <Button onClick={()=>setIsEditDialogOpen(true)} variant="outline" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default InventoryTable;
