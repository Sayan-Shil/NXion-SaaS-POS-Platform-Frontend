import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DollarSign, PercentSquare, Tag, User2 } from "lucide-react";
import React, { useState } from "react";

function DiscountSection() {
  const [discount, setDiscount] = useState({
    type : "percentage",
    value: ""
  });
  const handleDiscountChange = (e) => {
    const inputValue = e.target.value;

    setDiscount({
      ...discount,
      value: inputValue 
    });
  };

  return (
    <div className="p-4 border-b">
      <h2 className="text-lg font-semibold mb-3 flex items-center">
        <Tag className="w-4 h-4 mr-2"/>  Discount
      </h2>
      <div className="space-y-3">
        <Input
          placeholder={"Enter Discount Amount"}
          type={"number"}
          value={discount.value}
          onChange={handleDiscountChange}
        />
        <div className="flex gap-2">
          <Button onClick={()=>setDiscount({...discount,type: "percentage",value : ""})}
            variant={discount.type === "percentage" ? "default" : "outline"}
            className={"flex-1"}
          >
            %
          </Button>
          <Button className={"flex-1"} onClick={()=>setDiscount({...discount,type: "fixed",value : ""})}
          variant={discount.type === "fixed" ? "default" : "outline"}>
            <DollarSign className="w-4 h-4"/>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DiscountSection;
