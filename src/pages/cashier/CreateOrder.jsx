import React from 'react'
import ProductSection from './ProductSection/ProductSection'
import CartSection from './CartSection/CartSection'
import CustomerPayment from './CustomerPaymentSection/CustomerPayment'
import PosHeader from './Header/PosHeader'

const CreateOrder = () => {
  return (
    <div className='h-full flex flex-col overflow-hidden bg-background '>
        <PosHeader/>
        <div className='flex-1 flex overflow-hidden'>
            <ProductSection/>
            <CartSection/>
            <CustomerPayment/>
        </div>
    </div>
  )
}

export default CreateOrder