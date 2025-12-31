import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CreditCard } from 'lucide-react'
import React from 'react'
const paymentBreakdown = [
    {
        type: "CARD",
        percentage: 55.52,
        transactionCount: 36,
        totalAmount: 5899,
    },
    {
        type: "Cash",
        percentage: 30.12,
        transactionCount: 26,
        totalAmount: 3699,
    },
    {
        type: "UPI",
        percentage: 14.34,
        transactionCount: 16,
        totalAmount: 1201,
    }
]
function PaymentBreakdown() {
  return (
    <div className=''>
        <Card>
            <CardHeader>
                <CardTitle className={"text-xl"}>
                    Payment Breakdown
                </CardTitle>
            </CardHeader>

            <CardContent>
                <div className='space-y-4'>
                    {paymentBreakdown.map((payment,index)=>(
                        <div key={index} className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <CreditCard/>
                               <span> {payment.type}</span>
                            </div>
                            <div className='flex items-center gap-4'>
                                <div className='w-32 h-2 bg-violet-100 overflow-hidden rounded-full'>
                                    <div className='h-full bg-primary' style={{width: `${payment.percentage??0}%`}}>

                                    </div>
                                </div>

                                <span className='text-sm font-medium'>
                                   ₹ {payment.totalAmount}
                                </span>

                                
                                <span className='text-xs font-medium text-gray-500'>
                                   {payment.percentage}%
                                </span>

                                <span className='text-xs font-medium text-gray-500'>
                                    {payment.transactionCount}
                                </span>

                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    </div>
  )
}

export default PaymentBreakdown