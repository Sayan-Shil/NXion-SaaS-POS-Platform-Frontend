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
  refunds: [
    {
      id: 234,
      orderId: 2,
      reason: "wrong product received",
      amount: 699,
    },
    {
      id: 235,
      orderId: 5,
      reason: "product damaged on arrival",
      amount: 3499,
    },
    {
      id: 236,
      orderId: 3,
      reason: "customer changed mind",
      amount: 1699,
    },
    {
      id: 237,
      orderId: 1,
      reason: "duplicate payment detected",
      amount: 7899,
    },
    {
      id: 238,
      orderId: 6,
      reason: "size or color mismatch",
      amount: 230,
    },
    {
      id: 239,
      orderId: 7,
      reason: "late delivery complaint",
      amount: 990,
    },
    {
      id: 240,
      orderId: 4,
      reason: "partial order not fulfilled",
      amount: 249,
    },
  ],
};

const RefundTable = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className={"text-xl font-semibold "}> Refunds </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader className="bg-gradient-to-r from-violet-50 to-violet-100">
            <TableRow>
              <TableHead className="text-violet-700 font-semibold">
                Refund ID
              </TableHead>
              <TableHead className="text-violet-700 font-semibold">
                Order ID
              </TableHead>
              <TableHead className="text-violet-700 font-semibold">
                Reason
              </TableHead>
              <TableHead className="text-right text-violet-700 font-semibold">
                Amount
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {shiftData.refunds.map((refund, i) => (
              <TableRow
                key={refund.id}
                className={`transition hover:bg-violet-100 ${
                  i % 2 !== 0 ? "bg-violet-100/30" : ""
                }`}
              >
                <TableCell className="font-medium text-gray-800 dark:text-gray-200">
                  RFD - #{refund.id}
                </TableCell>
                <TableCell>ORD - #{refund.orderId}</TableCell>
                <TableCell>{refund.reason}</TableCell>
                <TableCell
                  className={"text-right flex items-center justify-end"}
                >
                  {" "}
                  <IndianRupee className="w-3 h-3 mt-0.5" />{" "}
                  {refund.amount.toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default RefundTable;
