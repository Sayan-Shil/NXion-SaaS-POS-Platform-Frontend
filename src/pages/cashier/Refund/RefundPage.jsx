import React, { useState } from "react";
import ReturnItemSection from "./ReturnItemSection";
import ReturnRecieptDialog from "./ReturnRecieptDialog";
import RefundOrderTable from "./RefundOrderTable";
import RefundOrderDetail from "./RefundOrderDetail";

function RefundPage() {
  const [selectedOrder, setSelectedOrder] = useState(null);

  const [showReturnRecieptDialog , setShowReturnRecieptDialog] = useState(false)

  const handleSelectOrder = (order)=>{
    setSelectedOrder(order)
  }

  return (
    <div className="h-full flex flex-col">
      <div className="bg-card p-4 border-b">
        <h1 className="font-bold text-2xl">Refund/Return</h1>
      </div>

      <div className="overflow-hidden">
        {!selectedOrder ? (
          <RefundOrderTable handleSelectOrder={handleSelectOrder} />
        ) : (
          <div className="flex">
            <RefundOrderDetail handleSelectOrder={handleSelectOrder} selectedOrder={selectedOrder} />
            <ReturnItemSection selectedOrder={selectedOrder} setShowReturnRecieptDialog={setShowReturnRecieptDialog} />
          </div>
        )}
      </div>

      {selectedOrder && <ReturnRecieptDialog showReturnRecieptDialog={showReturnRecieptDialog} setShowReturnRecieptDialog={setShowReturnRecieptDialog} selectedOrder={selectedOrder}/> }
    </div>
  );
}

export default RefundPage;
