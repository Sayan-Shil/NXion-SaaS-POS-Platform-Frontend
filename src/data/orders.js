export const orders = [ 
  { 
    id: 1,  
    date: "2024-02-11", 
    createdAt: "2024-02-11 14:32",
    status: "Completed",
    paymentType: "CARD",
    items: [
      { name: "Men Slim Fit Casual Shirt", qty: 1, price: 499 },
      { name: "Cotton Hoodie Black", qty: 1, price: 899 },
      { name: "Formal Trousers", qty: 1, price: 799 }
    ],
    totalAmount: 499 + 899 + 799
  },

  { 
    id: 2,  
    date: "2023-09-23", 
    createdAt: "2023-09-23 10:14",
    status: "Completed",
    paymentType: "UPI",
    items: [
      { name: "Cotton Round Neck T-Shirt (Pack of 2)", qty: 1, price: 129.50 }
    ],
    totalAmount: 129.50
  },

  { 
    id: 3,  
    date: "2024-01-07", 
    createdAt: "2024-01-07 18:52",
    status: "Paid",
    paymentType: "CASH",
    items: [
      { name: "Printed Oversized Hoodie", qty: 1, price: 199 },
      { name: "Running Sports Joggers", qty: 1, price: 131.75 }
    ],
    totalAmount: 199 + 131.75
  },

  { 
    id: 4,  
    date: "2023-12-14", 
    createdAt: "2023-12-14 12:09",
    status: "Completed",
    paymentType: "CARD",
    items: [
      { name: "Men Slim Fit Checkered Shirt", qty: 1, price: 300 },
      { name: "Leather Wallet", qty: 1, price: 200 },
      { name: "Zipper Hoodie Grey", qty: 1, price: 240 },
      { name: "Sports Sneakers White", qty: 1, price: 170 }
    ],
    totalAmount: 300 + 200 + 240 + 170
  },

  { 
    id: 5,  
    date: "2024-03-02", 
    createdAt: "2024-03-02 09:47",
    status: "Pending",
    paymentType: "UPI",
    items: [
      { name: "Basic Cotton Polo T-Shirt", qty: 1, price: 74.99 }
    ],
    totalAmount: 74.99
  },

  { 
    id: 6,  
    date: "2023-08-18", 
    createdAt: "2023-08-18 15:21",
    status: "Refunded",
    paymentType: "CARD",
    items: [
      { name: "Men Regular Fit Casual Shirt", qty: 1, price: 180 },
      { name: "Plain White Sneaker Socks (Pack of 3)", qty: 1, price: 76.10 }
    ],
    totalAmount: 180 + 76.10
  },

  { 
    id: 7,  
    date: "2024-02-28", 
    createdAt: "2024-02-28 20:40",
    status: "Completed",
    paymentType: "UPI",
    items: [
      { name: "Premium Formal Shirt", qty: 1, price: 350 },
      { name: "Men Leather Belt", qty: 1, price: 290.25 }
    ],
    totalAmount: 350 + 290.25
  },

  { 
    id: 8,  
    date: "2023-11-06", 
    createdAt: "2023-11-06 08:16",
    status: "Paid",
    paymentType: "CASH",
    items: [
      { name: "Cotton Round Neck T-Shirt", qty: 1, price: 60 },
      { name: "Handkerchief Set (Pack of 3)", qty: 1, price: 43.00 }
    ],
    totalAmount: 60 + 43
  },

  { 
    id: 9,  
    date: "2024-01-19", 
    createdAt: "2024-01-19 11:05",
    status: "Completed",
    paymentType: "CARD",
    items: [
      { name: "Slim Fit Jeans Blue", qty: 1, price: 350 },
      { name: "Sports Hoodie Black", qty: 1, price: 207.40 }
    ],
    totalAmount: 350 + 207.40
  },

  { 
    id: 10, 
    date: "2023-10-30", 
    createdAt: "2023-10-30 17:28",
    status: "Completed",
    paymentType: "UPI",
    items: [
      { name: "Checkered Spread Collar Shirt", qty: 1, price: 170 },
      { name: "Cotton Comfort Fit Chinos", qty: 1, price: 129.99 }
    ],
    totalAmount: 170 + 129.99
  }
];
