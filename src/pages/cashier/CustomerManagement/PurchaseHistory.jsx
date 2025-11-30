import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { orders } from "@/data/orders";
import { Calendar, IndianRupee } from "lucide-react";
import React from "react";

function PurchaseHistory() {
  return (
    <div className="p-4 border-t">
      <Card>
        <CardHeader>
          <CardTitle>Purchase History</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="space-y-4">

            {orders.map((order) => {
              const calculatedTotal = order.items?.reduce(
                (sum, item) => sum + item.qty * item.price,
                0
              );

              return (
                <div
                  key={order.id}
                  className="border rounded-lg p-4 hover:bg-accent/60 transition"
                >

                  {/* HEADER */}
                  <div className="flex justify-between items-center mb-3 pb-3 border-b">
                    <h3 className="font-semibold text-sm">Order #{order.id}</h3>

                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {order.createdAt}
                    </span>
                  </div>

                  {/* ITEMS */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-1">Items:</h4>

                    <div className="space-y-2 text-sm">
                      {order.items?.map((item, i) => (
                        <div key={i} className="flex justify-between">
                          
                          <span>
                            {item.name}{" "}
                            <b className="text-[11px] opacity-70">(x{item.qty})</b>
                          </span>

                          <span className="font-medium flex items-center gap-1">
                            <IndianRupee size={12} />
                            {(item.price * item.qty).toFixed(2)}
                          </span>

                        </div>
                      ))}
                    </div>
                  </div>

                  {/* PAYMENT + TOTAL (Inline — Reversed Order) */}
                  <div className="pt-3 border-t flex justify-end">
                    <div className="flex items-center gap-3">

                      {/* Badges first */}
                      <Badge variant="secondary">{order.paymentType}</Badge>

                      <Badge
                        variant={
                          order.status === "Completed"
                            ? "success"
                            : order.status === "Pending"
                            ? "warning"
                            : order.status === "Refunded"
                            ? "destructive"
                            : "default"
                        }
                      >
                        {order.status}
                      </Badge>

                      {/* Total amount last — right side */}
                      <div className="font-bold text-violet-600 text-lg flex items-center ml-2">
                        <IndianRupee size={16} className="mr-1" />
                        {calculatedTotal.toFixed(2)}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}

          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default PurchaseHistory;
