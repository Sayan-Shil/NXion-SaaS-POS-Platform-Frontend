import React, { Children } from 'react'
import BranchSidebar from '../Sidebar/BranchSidebar'
import BranchTopbar from '../Topbar/BranchTopbar'
import { Outlet } from 'react-router-dom'

function BranchLayout({children}) {
  return (
    <div className='flex h-screen bg-linear-to-br from-primary/5 via-background to-primary/5'>
        <BranchSidebar/>
        <div className='flex-1 flex flex-col '>
            <BranchTopbar/>
            <main className='flex-1 overflow-y-auto p-8 md:p-10 lg:p-12 m-4 '>
                {children || <Outlet/>}
            </main>
        </div>
    </div>
  )
}

export default BranchLayout