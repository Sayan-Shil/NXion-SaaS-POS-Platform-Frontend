import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

function CustomerInformation({selectedOrder}) {
     if (!selectedOrder) {
    return (
      <Card>
        <CardContent className="p-4 text-muted-foreground">
          No order selected
        </CardContent>
      </Card>
    );
  }
  return (
    <div>
        <Card className={"h-full"}>
            <CardContent className={"p-4"}>
                <h3 className='font-semibold mb-2'>Customer Information</h3>
                <div className='space-y-1 text-sm'>
                    <div className='flex justify-between'>
                        <span className='text-muted-foreground'>Full Name:</span>
                        <span>{selectedOrder.customer.fullName}</span>
                    </div>

                    <div className='flex justify-between'>
                        <span className='text-muted-foreground'>Phone :</span>
                        <span className='text-muted-foreground'>{selectedOrder.customer.phone}</span>
                    </div>
                
                </div>
            </CardContent>
        </Card>
    </div>
  )
}

export default CustomerInformation