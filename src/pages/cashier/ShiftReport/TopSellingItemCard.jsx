import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IndianRupee } from 'lucide-react';

const shiftData = {
  topSellingProducts: [
    {
      id: 1,
      name: "Men Geometric Print Polo Neck Pure Cotton Black T-Shirt",
      sellingPrice: 899,
      quantity: 5,
    },
    {
      id: 2,
      name: "Women's Floral Anarkali Kurti Rayon Printed",
      sellingPrice: 1299,
      quantity: 3,
    },
    {
      id: 3,
      name: "Kids Marvel Avengers Hoodie Red & Blue",
      sellingPrice: 749,
      quantity: 4,
    },
    {
      id: 4,
      name: "Men Slim Fit Denim Jacket Light Blue",
      sellingPrice: 1999,
      quantity: 2,
    },
    {
      id: 5,
      name: "Unisex White Sports Sneakers Soft Foam",
      sellingPrice: 1599,
      quantity: 6,
    },
  ],
};



function TopSellingItemCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className={"text-xl font-semibold mb-4 "}>
          Top Selling Product
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {shiftData.topSellingProducts.map((product,index)=>(
            <div className='flex items-center' key={product.id}>
                <div className='w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-sm  mr-3 '>
                {index+1}
                </div>

                <div className='flex-1'>
                    <div className='flex justify-between'>
                        <span className=''>{product.name}</span>
                         <span className='flex items-center font-bold'><IndianRupee className='w-4 h-4 mr-0.5'/> {product.sellingPrice}</span>
                    </div>
                    <div className='flex justify-between text-sm text-muted-foreground'>
                        <span>{product.quantity} units sold</span>
                    </div>
                </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default TopSellingItemCard