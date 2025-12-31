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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const orders = [
  {
    id: 1,
    createdAt: "2025-12-01T10:30:00",
    customer: { fullName: "Rahul Sen", phone: "9876543210" },
    status: "COMPLETED",
    totalAmount: 2499,
  },
  {
    id: 2,
    createdAt: "2025-12-01T11:05:00",
    customer: { fullName: "Ananya Sharma", phone: "9123456780" },
    status: "REFUNDED",
    totalAmount: 1899,
  },
  {
    id: 3,
    createdAt: "2025-12-01T11:45:00",
    customer: { fullName: "Sourav Das", phone: "9998877665" },
    status: "COMPLETED",
    totalAmount: 3299,
  },
  {
    id: 4,
    createdAt: "2025-12-01T12:12:00",
    customer: { fullName: "Madhumita Bose", phone: "9087654321" },
    status: "REFUNDED",
    totalAmount: 799,
  },
  {
    id: 5,
    createdAt: "2025-12-01T12:33:00",
    customer: { fullName: "Rohan Gupta", phone: "9876501234" },
    status: "COMPLETED",
    totalAmount: 999,
  },
];

function RecentOrders() {
  return (
    <Card className="w-full overflow-hidden">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">
          Recent Orders
        </CardTitle>
      </CardHeader>

      <CardContent className="overflow-x-hidden">
        <Table className="w-full table-fixed">
          <TableHeader className="bg-linear-to-r from-violet-50 to-violet-100">
            <TableRow>
              <TableHead className="text-violet-700 font-semibold">
                Order ID
              </TableHead>
              <TableHead className="text-violet-700 font-semibold">
                Date/Time
              </TableHead>
              <TableHead className="text-violet-700 font-semibold truncate">
                Customer Name
              </TableHead>
              <TableHead className="text-violet-700 font-semibold">
                Amount
              </TableHead>
              <TableHead className="text-violet-700 font-semibold text-right">
                Status
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {orders.map((order, i) => (
              <TableRow
                key={order.id}
                className={`transition hover:bg-violet-100 ${
                  i % 2 !== 0 ? "bg-violet-100/30" : ""
                }`}
              >
                <TableCell className="font-medium truncate">
                  #{order.id}
                </TableCell>
                <TableCell className="truncate">
                  {order.createdAt}
                </TableCell>
                <TableCell className="truncate">
                  {order.customer.fullName}
                </TableCell>
                <TableCell className="flex items-center gap-1 truncate">
                  <IndianRupee className="w-3 h-3 flex-shrink-0" />
                  {order.totalAmount.toFixed(2)}
                </TableCell>
                <TableCell className="text-right truncate">
                  {order.status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default RecentOrders;
