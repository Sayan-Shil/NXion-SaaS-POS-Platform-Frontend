import { Label } from '@/components/ui/label'
import { Mail, MapPin,Phone } from 'lucide-react'
import React from 'react'

function ContactInfo({storeData}) {
  return (
    <div>
        <h3 className='text-lg mb-4 font-semibold'>Contact Information</h3>

        <div className='space-y-4'>

           <div className='flex gap-2'>
             <MapPin className='w-4 h-4 text-gray-400'/>
            <div>
                <Label className={"text-sm text-muted-foreground"}>Address</Label>
                <p className='text-base'>{storeData.contact?.address}</p>
            </div>
           </div>


           <div className='flex gap-2'>
             <Phone className='w-4 h-4 text-gray-400'/>
            <div>
                <Label className={"text-sm text-muted-foreground"}>Phone</Label>
                <p className='text-base'>{storeData.contact?.phone}</p>
            </div>
           </div>

             <div className='flex gap-2'>
             <Mail className='w-4 h-4 text-gray-400'/>
            <div>
                <Label className={"text-sm text-muted-foreground"}>email</Label>
                <p className='text-base'>{storeData.contact?.email}</p>
            </div>
           </div>

        </div>
    </div>
  )
}

export default ContactInfo