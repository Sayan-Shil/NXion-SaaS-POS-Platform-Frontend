import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { PlusIcon, SearchIcon } from 'lucide-react'
import React, { useState } from 'react'
import CustomerForm from '../CustomerPaymentSection/CustomerForm'

function CustomerSearch() {

const [showCustomerForm,setShowCustomerForm] = useState(false)

  return (
    <div className='p-4 border-b'>
        <div className='flex gap-2 items-center '>
            <div className='relative flex-1 flex items-center'>
                {/* <SearchIcon className='mr-2'/> */}
                <Input placeholder={"Search Customer ..."} type={"text"} className={"pl-5" } />
            </div>
            <Button onClick={()=>setShowCustomerForm(true)} ><PlusIcon className='w-4 h-4 mr-2'/> Add New Customer</Button>
        </div>
        <CustomerForm showCustomerForm={showCustomerForm} setShowCustomerForm={setShowCustomerForm} />
    </div>
  )
}

export default CustomerSearch