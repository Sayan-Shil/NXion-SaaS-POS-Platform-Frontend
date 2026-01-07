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
import { Edit, Trash } from "lucide-react";

/* Temporary static data (replace later with API data) */
const branches = [
  {
    id: 1,
    name: "Kolkata Main Branch",
    address: "Salt Lake, Sector V",
    manager: "Rahul Sen",
    phone: "9876543210",
  },
  {
    id: 2,
    name: "Howrah Branch",
    address: "Shibpur",
    manager: "Ananya Sharma",
    phone: "9123456780",
  },
  {
    id: 3,
    name: "Durgapur Branch",
    address: "City Centre",
    manager: "Sourav Das",
    phone: "9998877665",
  },
];

function BranchTable({ onEdit }) {
  return (
    <Table className="bg-white border rounded-md">
  <TableHeader>
    <TableRow className="border-b bg-gray-50">
      <TableHead className="font-semibold text-gray-700">
        Branch Name
      </TableHead>
      <TableHead className="font-semibold text-gray-700">
        Address
      </TableHead>
      <TableHead className="font-semibold text-gray-700">
        Manager
      </TableHead>
      <TableHead className="font-semibold text-gray-700">
        Phone
      </TableHead>
      <TableHead className="text-right font-semibold text-gray-700">
        Action
      </TableHead>
    </TableRow>
  </TableHeader>

  <TableBody>
    {branches.map((branch) => (
      <TableRow
        key={branch.id}
        className="border-b last:border-b-0 hover:bg-gray-50 transition"
      >
        <TableCell className="font-medium text-gray-900">
          {branch.name}
        </TableCell>
        <TableCell className="text-gray-600">
          {branch.address}
        </TableCell>
        <TableCell className="text-gray-600">
          {branch.manager}
        </TableCell>
        <TableCell className="text-gray-600">
          {branch.phone}
        </TableCell>

        <TableCell className="text-right">
          <div className="flex justify-end gap-3">
            <button
              onClick={() => onEdit(branch)}
              className="text-gray-600 hover:text-black transition"
              title="Edit"
            >
              <Edit className="w-4 h-4" />
            </button>

            <button
              className="text-red-500 hover:text-red-600 transition"
              title="Delete"
            >
              <Trash className="w-4 h-4" />
            </button>
          </div>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>

  );
}

export default BranchTable;
