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

const shiftData = {
  recentOrders: [
    {
      id: 1,
      createdAt: "01:25 PM",
      paymentType: "CASH",
      totalAmount: 7899,
    },
    {
      id: 2,
      createdAt: "01:40 PM",
      paymentType: "UPI",
      totalAmount: 520,
    },
    {
      id: 3,
      createdAt: "02:05 PM",
      paymentType: "CARD",
      totalAmount: 1699,
    },
    {
      id: 4,
      createdAt: "02:40 PM",
      paymentType: "CASH",
      totalAmount: 249,
    },
    {
      id: 5,
      createdAt: "03:15 PM",
      paymentType: "UPI",
      totalAmount: 3499,
    },
    {
      id: 6,
      createdAt: "03:55 PM",
      paymentType: "CARD",
      totalAmount: 230,
    },
    {
      id: 7,
      createdAt: "04:20 PM",
      paymentType: "CREDIT",
      totalAmount: 990,
    }
  ]
};


function RecentOrderTable() {
  return (

    <Card>
        <CardHeader>
            <CardTitle className={"text-xl font-semibold "}> Recent Orders </CardTitle>
        </CardHeader>
        <CardContent>
             <Table>
              <TableHeader className="bg-gradient-to-r from-violet-50 to-violet-100">
                <TableRow>
                  <TableHead className="text-violet-700 font-semibold">
                    Order ID
                  </TableHead>
                  <TableHead className="text-violet-700 font-semibold">
                    Time
                  </TableHead>
                  <TableHead className="text-violet-700 font-semibold">
                    Payment
                  </TableHead>
                  <TableHead className="text-right text-violet-700 font-semibold">
                    Amount
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {shiftData.recentOrders.map((order, i) => (
                  <TableRow
                    key={order.id}
                    className={`transition hover:bg-violet-100 ${
                      i % 2 !== 0 ? "bg-violet-100/30" : ""
                    }`}
                  >
                    <TableCell className="font-medium text-gray-800 dark:text-gray-200">
                      #{order.id}
                    </TableCell>
                    <TableCell>{order.createdAt}</TableCell>
                    <TableCell>{order.paymentType}</TableCell>
                    <TableCell className={"text-right flex items-center justify-end"}> <IndianRupee className="w-3 h-3 mt-0.5"/> {(order.totalAmount).toFixed(2)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
        </CardContent>
    </Card>

  );
}

export default RecentOrderTable;
