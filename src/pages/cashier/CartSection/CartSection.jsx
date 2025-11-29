import { Button } from "@/components/ui/button";
import { Pause, ShoppingCart, Trash2 } from "lucide-react";
import React, { useState } from "react";
import CartItem from "./CartItem";
import { cardItems } from "@/data/cardItems";
import CartSummary from "./CartSummary";
import HeldOrderDialog from "./HeldOrderDialog";

const CartSection = () => {

const [showHeldOrderDialog,setShowHeldOrderDialog] = useState(false)


  return (
    <>
      <div className="border-r w-2/5 flex flex-col  ">
        <div className="p-4 border-b bg-muted">
          <div className="flex items-center justify-between">
            <h2 className="text-md font-semibold flex items-center ">
              <ShoppingCart className="mr-2" />
              Cart ({3}) items
            </h2>
            <div className="flex space-x-2">
              <Button onClick={()=>setShowHeldOrderDialog(true)} variant={"outline"} size={"sm"}>
                {" "}
                <Pause className="w-4 h-4 mr-1" />
                Held
              </Button>
              <Button variant={"outline"} size={"sm"}>
                {" "}
                <Trash2 className="w-4 h-4 mr-1" />
                Clear
              </Button>
            </div>
          </div>
        </div>
        <div className="p-4 space-y-3">
          {cardItems.map((item, index) => (
            <CartItem item={item} key={index} />
          ))}
        </div>

        <CartSummary />
      </div>

      <HeldOrderDialog showHeldOrderDialog={setShowHeldOrderDialog} setShowHeldOrderDialog={setShowHeldOrderDialog} />
    </>
  );
};

export default CartSection;
