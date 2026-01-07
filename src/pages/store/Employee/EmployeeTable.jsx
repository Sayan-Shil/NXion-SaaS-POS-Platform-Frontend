import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Edit, EyeIcon, Trash } from "lucide-react";
import EditEmployeeDialog from "./EditEmployeeDialog";

function EmployeeTable() {
  const [open, setOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const employees = [
    {
      id: 1,
      name: "Sayan Shil",
      role: "BRANCH_ADMIN",
      email: "sayansil2000@gmail.com",
      access: "Allowed",
      since: "2024-06-12",
      status: "ACTIVE",
    },
    {
      id: 2,
      name: "Rahul Sen",
      role: "CASHIER",
      email: "rahul.sen@gmail.com",
      access: "Allowed",
      since: "2024-08-01",
      status: "ACTIVE",
    },
    {
      id: 3,
      name: "Ananya Sharma",
      role: "CASHIER",
      email: "ananya.sharma@gmail.com",
      access: "Blocked",
      since: "2024-10-18",
      status: "INACTIVE",
    },
  ];

  const handleEdit = (employee) => {
    setSelectedEmployee(employee);
    setOpen(true);
  };

  return (
    <>
      <Table className="bg-white border rounded-md">
        <TableHeader>
          <TableRow className="border-b bg-gray-50">
            <TableHead className="font-semibold text-gray-700">
              Name
            </TableHead>
            <TableHead className="font-semibold text-gray-700">
              Role
            </TableHead>
            <TableHead className="font-semibold text-gray-700">
              Email
            </TableHead>
            <TableHead className="font-semibold text-gray-700">
              Login Access
            </TableHead>
            <TableHead className="font-semibold text-gray-700">
              Assign Since
            </TableHead>
            <TableHead className="text-right font-semibold text-gray-700">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {employees.map((emp) => (
            <TableRow
              key={emp.id}
              className="border-b last:border-b-0 hover:bg-gray-50 transition"
            >
              <TableCell className="font-medium text-gray-900">
                {emp.name}
              </TableCell>
              <TableCell>{emp.role}</TableCell>
              <TableCell>{emp.email}</TableCell>
              <TableCell>{emp.access}</TableCell>
              <TableCell>{emp.since}</TableCell>

              <TableCell className="text-right">
                <div className="flex justify-end gap-3">
                  <button className="text-gray-600 hover:text-black transition">
                    <EyeIcon className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => handleEdit(emp)}
                    className="text-gray-600 hover:text-black transition"
                  >
                    <Edit className="w-4 h-4" />
                  </button>

                  <button className="text-red-500 hover:text-red-600 transition">
                    <Trash className="w-4 h-4" />
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <EditEmployeeDialog
        open={open}
        onOpenChange={setOpen}
        selectedEmployee={selectedEmployee}
      />
    </>
  );
}

export default EmployeeTable;
