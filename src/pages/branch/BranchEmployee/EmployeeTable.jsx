import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Edit, Edit2, EyeIcon, IndianRupee, Printer } from 'lucide-react'
import React, { useState } from 'react'
import EditEmployeeDialog from './EditEmployeeDialog';
const orders = [
  {
    id: 1,
    createdAt: "2025-12-01T10:30:00",
    customer: { fullName: "Rahul Sen", phone: "9876543210" },
     cashierId: "CASH-001",
    paymentType: "CASH",
    status: "COMPLETED",
    totalAmount: 2499,
    items: [
      {
        id: 101,
        quantity: 1,
        product: {
          name: "Wireless Bluetooth Earbuds",
          sku: "EB-4521",
          image: "https://picsum.photos/id/1011/50",
          sellingPrice: 1499,
        },
      },
      {
        id: 102,
        quantity: 1,
        product: {
          name: "Fast Charging 20W Adapter",
          sku: "ADP-2332",
          image: "https://picsum.photos/id/1015/50",
          sellingPrice: 1000,
        },
      },
    ],
  },

  {
    id: 2,
    createdAt: "2025-12-01T11:05:00",
    customer: { fullName: "Ananya Sharma", phone: "9123456780" },
     cashierId: "CASH-002",
    paymentType: "CARD",
    status: "REFUNDED",
    totalAmount: 1899,
    items: [
      {
        id: 103,
        quantity: 1,
        product: {
          name: "Cotton Casual T-Shirt",
          sku: "TS-9812",
          image: "https://picsum.photos/id/1003/50",
          sellingPrice: 899,
        },
      },
      {
        id: 104,
        quantity: 1,
        product: {
          name: "Slim Fit Denim Jeans",
          sku: "JN-3311",
          image: "https://picsum.photos/id/1004/50",
          sellingPrice: 1000,
        },
      },
    ],
  },

  {
    id: 3,
    createdAt: "2025-12-01T11:45:00",
    customer: { fullName: "Sourav Das", phone: "9998877665" },
     cashierId: "CASH-003",
    paymentType: "UPI",
    status: "COMPLETED",
    totalAmount: 3299,
    items: [
      {
        id: 105,
        quantity: 2,
        product: {
          name: "MagSafe Compatible PowerBank",
          sku: "PB-9281",
          image: "https://picsum.photos/id/1020/50",
          sellingPrice: 1499,
        },
      },
      {
        id: 106,
        quantity: 1,
        product: {
          name: "USB-C Braided Charging Cable",
          sku: "CB-1122",
          image: "https://picsum.photos/id/1022/50",
          sellingPrice: 300,
        },
      },
    ],
  },

  {
    id: 4,
    createdAt: "2025-12-01T12:12:00",
    customer: { fullName: "Madhumita Bose", phone: "9087654321" },
     cashierId: "CASH-004",
    paymentType: "CARD",
    status: "REFUNDED",
    totalAmount: 799,
    items: [
      {
        id: 107,
        quantity: 1,
        product: {
          name: "Silicone Phone Back Cover",
          sku: "CV-5531",
          image: "https://picsum.photos/id/1025/50",
          sellingPrice: 799,
        },
      },
    ],
  },

  {
    id: 5,
    createdAt: "2025-12-01T12:33:00",
    customer: { fullName: "Rohan Gupta", phone: "9876501234" },
     cashierId: "CASH-005",
    paymentType: "CASH",
    status: "COMPLETED",
    totalAmount: 999,
    items: [
      {
        id: 108,
        quantity: 3,
        product: {
          name: "Notebook (Soft Cover)",
          sku: "NB-7612",
          image: "https://picsum.photos/id/1035/50",
          sellingPrice: 333,
        },
      },
    ],
  },

  {
    id: 6,
    createdAt: "2025-12-01T13:05:00",
    customer: { fullName: "Priya Singh", phone: "9834125786" },
     cashierId: "CASH-006",
    paymentType: "UPI",
    status: "REFUNDED",
    totalAmount: 2749,
    items: [
      {
        id: 109,
        quantity: 1,
        product: {
          name: "Women's Running Shoes",
          sku: "SH-4401",
          image: "https://picsum.photos/id/1037/50",
          sellingPrice: 2749,
        },
      },
    ],
  },

  {
    id: 7,
    createdAt: "2025-12-01T13:41:00",
    customer: { fullName: "Aditya Roy", phone: "9823145690" },
     cashierId: "CASH-007",
    paymentType: "CASH",
    status: "COMPLETED",
    totalAmount: 1599,
    items: [
      {
        id: 110,
        quantity: 1,
        product: {
          name: "Wireless Gaming Mouse",
          sku: "MS-5552",
          image: "https://picsum.photos/id/1044/50",
          sellingPrice: 1599,
        },
      },
    ],
  },

  {
    id: 8,
    createdAt: "2025-12-01T14:15:00",
    customer: { fullName: "Ritika Dey", phone: "9798012345" },
     cashierId: "CASH-008",
    paymentType: "UPI",
    status: "REFUNDED",
    totalAmount: 4999,
    items: [
      {
        id: 111,
        quantity: 1,
        product: {
          name: "Smartwatch AMOLED Display",
          sku: "SW-8833",
          image: "https://picsum.photos/id/1047/50",
          sellingPrice: 4999,
        },
      },
    ],
  },

  {
    id: 9,
    createdAt: "2025-12-01T15:00:00",
    customer: { fullName: "Neel Chakraborty", phone: "9034768912" },
     cashierId: "CASH-009",
    paymentType: "CARD",
    status: "COMPLETED",
    totalAmount: 1249,
    items: [
      {
        id: 112,
        quantity: 1,
        product: {
          name: "Bluetooth Portable Speaker",
          sku: "SP-7721",
          image: "https://picsum.photos/id/1052/50",
          sellingPrice: 1249,
        },
      },
    ],
  },

  {
    id: 10,
    createdAt: "2025-12-01T15:35:00",
    customer: { fullName: "Kunal Mishra", phone: "9908123476" },
     cashierId: "CASH-010",
    paymentType: "CASH",
    status: "REFUNDED",
    totalAmount: 2999,
    items: [
      {
        id: 113,
        quantity: 1,
        product: {
          name: "Premium Leather Office Bag",
          sku: "BG-3241",
          image: "https://picsum.photos/id/1061/50",
          sellingPrice: 2999,
        },
      },
    ],
  },
];
function EmployeeTable() {
    const [selectedEmployee, setSelectedEmployee] = useState()
    const handleOpenEditDialog =()=>{
        setSelectedEmployee({fullname:"Sayan Shil",email:"sayansil2000@gmail.com",phone:"8697692502",role: "BRANCH_ADMIN",password:"12345"})
    }
  return (
    <Table>
            <TableHeader className="bg-linear-to-r from-violet-50 to-violet-100 w-[150px]">
              <TableRow>
                <TableHead className="text-violet-700 font-semibold w-[150px]">
                 Name
                </TableHead>
                <TableHead className="text-violet-700 font-semiboldw-[100px]">
                  Role
                </TableHead>
                <TableHead className="text-violet-700 font-semibold">
                  Email
                </TableHead>
                 <TableHead className="text-violet-700 font-semibold">
                  Login Access
                </TableHead>
                <TableHead className=" text-violet-700 font-semibold">
                 Assign Since
                </TableHead>
                <TableHead className=" text-violet-700 font-semibold">
                  Status
                </TableHead>
                <TableHead className="text-right text-violet-700 font-semibold">
                  Action
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
                  <TableCell className="font-medium text-gray-800 dark:text-gray-200">
                    #{order.id}
                  </TableCell>
                  <TableCell>{order.createdAt}</TableCell>
                  <TableCell>{order.customer.fullName}</TableCell>
                  <TableCell>{order.cashierId}</TableCell>
                  <TableCell className={"flex items-center"}>
                    <IndianRupee className="w-3 h-3 mt-0.5" />
                    {order.totalAmount.toFixed(2)}
                  </TableCell>
                
                  <TableCell>{order.status}</TableCell>
                  <TableCell className={"text-right"}>
                    <div className="flex justify-end gap-2">
                     <EditEmployeeDialog handleOpenEditDialog={handleOpenEditDialog} selectedEmployee={selectedEmployee}/>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
  )
}

export default EmployeeTable