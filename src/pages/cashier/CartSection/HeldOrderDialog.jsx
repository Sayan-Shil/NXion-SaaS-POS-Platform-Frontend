import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogClose, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Play } from "lucide-react";
import React from "react";

const heldOrders = [
  {
    id: "55650",
    items: [1, 1, 1, 1],
    timestamp: "2025-11-30T16:42:18.123Z",
  },
  {
    id: "550",
    items: [1, 1, 1, 1],
    timestamp: "2025-12-30T16:42:18.123Z",
  },
];

function HeldOrderDialog({showHeldOrderDialog,setShowHeldOrderDialog}) {

    const handleResumeOrder = (order)=>{
        console.log("Resuming Order : " ,order)
    }
  return (
    <Dialog open={showHeldOrderDialog} onOpenChange={setShowHeldOrderDialog} >
      <DialogContent>
        <DialogHeader>Held Order</DialogHeader>
        <div className="space-y-3 ">
          {heldOrders.map((order) => (
            <Card key={order.id}>
              <CardContent>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">Order ID : #{order.id}</h3>
                  <p className="text-sm text-muted-foreground">
                    Items : {order.items.join(",")}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Time : {new Date(order.timestamp).toLocaleString()}
                  </p>
                  </div>
                  <Button  size={"sm"} onClick={()=>handleResumeOrder(order)}><Play className="w-4 h-4 mr-1 "/>Resume</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default HeldOrderDialog;
