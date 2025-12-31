import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogFooter, DialogHeader } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import React from 'react'

function InventoryFormDialog({open,onOpenChange,mode,selectedProductId,setSelectedProductId,quantity,setQuantity,onSubmit}) {
    const isEdit = mode == "edit"
    const selectedProduct = {
        name: "Men's T-Shirt"
    }
    const products=[]
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent>
            <DialogHeader>
                {isEdit? " Edit inventory " : "Add Inventory"}
            </DialogHeader>

            <div className='grid gap-4 py-4'>
                <div className='gris grid-cols-4 items-center gap-4'>

                    <label htmlFor='products'>Product</label>
                    {isEdit ? <Input id="product" value={selectedProduct?.name} disabled className={"col-span-3"}/>: <Select value={selectedProductId} onValueChange={(value)=>setSelectedProductId(value)}>
                        <SelectTrigger  className={"w-full col-span-3"}>
                            <SelectValue placeholder="Select Products..."/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value={"all"}>All Products</SelectItem>
                            {products.map((product)=><SelectItem key={product.id} value={product.id}>{product.sku || product.name}</SelectItem>)}
                        </SelectContent>
                        </Select>}

                </div>
                <div className='gris grid-cols-4 items-center gap-4'>
                     <label htmlFor='products'>Product</label>
                    <Input className={"col-span-3"} type={"number"} min={1} value={quantity} onChange={(e)=>setQuantity(e.target.value)}/>
                </div>
            </div>
            <DialogFooter>
                <Button variant={"outline"} onClick={()=>onOpenChange(false)}>Cancel</Button>
                <Button onClick={onSubmit}>{isEdit?"Update inventory" : "Add Inventory"}</Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}

export default InventoryFormDialog