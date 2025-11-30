import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IndianRupee, Package, PlusIcon, Star, UserIcon } from "lucide-react";
import React from "react";

function CustomerDetail({ customer }) {
  return (
    <div className="p-4 ">
      <div className="flex justify-between item-start mb-6">
        <div>
          <h2>{customer.fullName}</h2>
          <p className="text-sm text-muted-foreground">{customer.phone}</p>
          <p className="text-sm text-muted-foreground">{customer.email}</p>
        </div>

        <Button>
            <PlusIcon className="w-4 h-4 mr-2"/> Add Points
        </Button>
      </div>
      <div className="grid grid-cols-4 gap-4 mb-6 md:grid-cols-3 ">
        <Card>
            <CardHeader>
                <CardTitle>Loyalty Points</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex items-center gap-2">
                     <Star className='w-4 h-4 mr-1 text-violet-500'/>
                    <span>{customer.loyaltyPoints}</span>
                </div>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>Total Orders</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex items-center gap-2">
                     <Package className='w-4 h-4 mr-1 text-violet-500'/>
                    <span>{customer.totalOrders}</span>
                </div>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>Total Spends</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex items-center gap-2">
                     <IndianRupee className='w-4 h-4 mr-1 mt-0.5 text-violet-500'/>
                    <span>{customer.totalSpends}</span>
                </div>
            </CardContent>
        </Card>
      </div>

      <div>
        <Card>
            <CardHeader>
                <CardTitle> Average Order </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-lg font-bold text-muted-foreground flex items-center"> <IndianRupee size={12} className='w-4 h-4 mr-1 mt-0.5 text-violet-500'/>{customer.averageOrderValue}</p>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default CustomerDetail;
