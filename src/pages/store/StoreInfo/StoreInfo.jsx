import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Edit } from 'lucide-react'
import React, { useState } from 'react'
import BasicInfo from './BasicInfo'
import ContactInfo from './ContactInfo'
import { Dialog,DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import EditStoreForm from './EditStoreForm'
import { getInitialValues } from './formUtils'


const storeData = {
    brand: "Ohio Shoppoing",
    description: "na kinlei loss, Na kinlei loss",
    storeType: "Retail Shop",
    contact : {
        phone: "8697692512",
        email: "sayansil2000@gmail.com",
        address: "78,Sri Nagar, Kashmir- 96"
    }
}
function StoreInfo() {

    const [isOpenEditStoreDialog, setIsOpenEditStoreDialog] =useState(false)
    const onSubmit =()=>{
        setIsOpenEditStoreDialog(false);
    }
    const onCancel =()=>{
        setIsOpenEditStoreDialog(false);
    }
  return (
   <div>
     <Card>
        <CardHeader>
            <div className='flex justify-between items-center'>
                <CardTitle className={"text-3xl font-bold tracking-tight"}>Store Information</CardTitle>
                <Button onClick={()=>setIsOpenEditStoreDialog(true)} size={"sm"} variant={"outline"}><Edit/>Edit Details</Button>
            </div>
        </CardHeader>
        <CardContent>
            <div className='grid md:grid-cols-2 gap-6  '>
                <BasicInfo storeData={storeData}/>
                <ContactInfo storeData={storeData}/>
            </div>
            <div className='mt-4 pt-4 border-t border-gray-200'>
                <p className='text-sm text-muted-foreground'>Store created on {new Date().toLocaleDateString()}</p>
            </div>
        </CardContent>
    </Card>
    <Dialog open={isOpenEditStoreDialog} onOpenChange={setIsOpenEditStoreDialog}>
        <DialogContent className={"sm:max-w-[600px] max-h-[90vh] overflow-auto"}>
            <DialogHeader>
                <DialogTitle>
                    Edit Store
                </DialogTitle>
            </DialogHeader>
            <EditStoreForm onSubmit={onSubmit}  onCancel={onCancel} initialValues={getInitialValues(storeData)}/>
        </DialogContent>
    </Dialog>
   </div>
  )
}

export default StoreInfo