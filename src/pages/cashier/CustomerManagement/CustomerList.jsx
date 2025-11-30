import { customers } from '@/data/customers'
import React from 'react'
import CustomerCard from './CustomerCard'

function CustomerList({setSelectedCustomer}) {
  return (
    <div className='flex-1 overflow-auto '>
        <div className='divide-y'>
            {customers.map((customer)=>(
                <CustomerCard setSelectedCustomer={setSelectedCustomer} key={customer.id} customer={customer}/>
            ))}
        </div>
    </div>
  )
}

export default CustomerList