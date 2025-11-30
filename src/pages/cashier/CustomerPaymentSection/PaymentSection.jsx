import { Button } from '@/components/ui/button'
import { CreditCard, IndianRupee, Pause } from 'lucide-react'
import React, { useState } from 'react'
import PaymentDialog from './PaymentDialog'

function PaymentSection() {

const CartItems = [1]
const [showPaymentDialog, setShowPaymentDialog] =useState(false)

  return (
    <div className='flex flex-1 flex-col p-4 justify-end'>
      <div className='space-y-4'>

        <div className='text-center'>
          <h1 className='font-semibold text-3xl text-violet-600 dark:text-violet-200 flex items-center justify-center '><IndianRupee size={18} className='mt-0.5' /> {8999}</h1>
          <p className='text-sm text-muted-foreground'>Total Amount</p>
        </div>

        <div className='space-y-3'>
          <Button onClick={()=>setShowPaymentDialog(true)} disabled={CartItems.length===0} className={"w-full py-3 text-lg font-semibold"}> <CreditCard className='w-5 h-5 mr-2'/> Process Payment</Button>
          <Button variant={"outline"} disabled={CartItems.length===0} className={"w-full py-3 text-lg font-semibold"}> <Pause className='w-5 h-5 mr-2'/> Hold Order</Button>
        </div>

      </div>
      <PaymentDialog showPaymentDialog={showPaymentDialog} setShowPaymentDialog={setShowPaymentDialog}/>
    </div>
  )
}

export default PaymentSection