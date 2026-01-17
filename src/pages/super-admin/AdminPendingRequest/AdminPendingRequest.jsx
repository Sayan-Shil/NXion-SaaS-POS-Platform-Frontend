import { Check, Plus, X } from "lucide-react";
import React from "react";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const stores = [
  {
    id: 1,
    name: "Green Mart",
    owner: "Rahul Sharma",
    contact: "9876543210",
    businessType: "Grocery",
    submittedOn: "2026-01-05",
    documents: "Uploaded",
  },
  {
    id: 2,
    name: "Tech Hub",
    owner: "Anita Verma",
    contact: "9123456789",
    businessType: "Electronics",
    submittedOn: "2026-01-07",
    documents: "Pending",
  },
];

function AdminPendingRequest() {
  const handleAccept = (id) => {
    console.log("Accepted store id:", id);
  };

  const handleReject = (id) => {
    console.log("Rejected store id:", id);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">
          Pending Requests
        </h1>

        <Badge className="flex items-center gap-1">
          <Plus className="h-4 w-4" />
          Pending
        </Badge>
      </div>

      <Card>
        <CardContent className="p-0 m-8">
          <Table className=" w-full">
            <TableHeader className="bg-gray-200">
              <TableRow>
                <TableHead className=" font-semibold  ">
                  Store Name
                </TableHead>
                <TableHead className=" font-semibold">
                  Owner
                </TableHead>
                <TableHead className=" font-semibold">
                  Contact
                </TableHead>
                <TableHead className=" font-semibold">
                  Business Type
                </TableHead>
                <TableHead className=" font-semibold">
                  Submitted On
                </TableHead>
                <TableHead className=" font-semibold">
                  Documents
                </TableHead>
                <TableHead className="text-right  font-semibold">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {stores.map((item, i) => (
                <TableRow
                  key={item.id}
                  
                >
                  <TableCell className="font-medium">
                    {item.name}
                  </TableCell>

                  <TableCell className="text-sm text-gray-600">
                    {item.owner}
                  </TableCell>

                  <TableCell>{item.contact}</TableCell>

                  <TableCell className="capitalize">
                    {item.businessType}
                  </TableCell>

                  <TableCell>{item.submittedOn}</TableCell>

                  <TableCell>
                    <Badge
                      variant={
                        item.documents === "Uploaded"
                          ? "success"
                          : "destructive"
                      }
                    >
                      {item.documents}
                    </Badge>
                  </TableCell>

                  <TableCell className="text-right space-x-2">
                    <Button
                      onClick={() => handleAccept(item.id)}
                      variant="outline"
                      className="bg-green-50"
                    >
                      <Check className="h-4 w-4 mr-1" />
                      Accept
                    </Button>

                    <Button
                      onClick={() => handleReject(item.id)}
                      variant="outline"
                      className="bg-red-50"
                    >
                      <X className="h-4 w-4 mr-1" />
                      Reject
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

export default AdminPendingRequest;
