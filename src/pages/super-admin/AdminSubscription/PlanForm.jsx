import { Input } from '@/components/ui/input'
import { Select, SelectTrigger, SelectValue,SelectContent, SelectItem } from '@/components/ui/select';
import { Field, Form } from 'formik'
import React from 'react'
import FeatureSwitchGrid from './FeatureSwitchGrid';
import ExtraFeaturesList from './ExtraFeaturesList';
import { Button } from '@/components/ui/button';

const BILLING_CYCLES = [
  { label: 'Monthly', value: 'MONTHLY' },
  { label: 'Yearly', value: 'YEARLY' },
];



function PlanForm({values,isSubmitting,setFieldValue}) {
  const handleFeatureSwitch = (Key,value)=>{
    setFieldValue(Key,value)
  }
  const handleExtraFeatureChange = (idx,value)=>{
    const arr=[...values.extraFeature]
    arr[idx]=value;
    setFieldValue("extraFeatures",arr)
  }
  const handleRemoveExtraFeatureChange = (idx,value)=>{
    const arr = value.extraFeatures.filter((_,i)=> i!==idx)
    setFieldValue("extraFeatures",arr.length?arr:[""])
  }
   const handleAddExtraFeatureChange = ()=>{
    setFieldValue("extraFeatures",[...values.extraFeatures,""])
  }

  return (
   <Form className='space-y-4'>
    {/* Name */}
    <div>
      <label htmlFor='plan-name' className='block font-medium'>
        Name
      </label>
      <Field as={Input} name="name" placeholder="Plan Name" />
    </div>
   {/* Description */}
    <div>
      <label htmlFor='plan-description' className='block font-medium'>
        Description
      </label>
      <Field as={Input} name="description" placeholder="Plan Description" />
    </div>

    {/* Price And Billing Cycle */}
    <div>
      <label htmlFor='plan-description' className='block font-medium'>
        Description
      </label>
      <Field name="billingCycle">
        {({field})=> (
          <Select
          value={field.value} onValueChange={(val)=>setFieldValue("billingCycle",val)}>
            <SelectTrigger className={"w-full"} id="plan-billing-cycle">
              <SelectValue placeholder="Select Cycle"/>
            </SelectTrigger>
            <SelectContent>
              {BILLING_CYCLES.map((opt)=>(
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )

        }
      </Field>
    </div>

     {/* Branches And Products */}
     <div className='flex gap-4'>
      <div className='flex-1'>
        <label htmlFor='plan-branches' className='block font-medium'>Branches</label>
        <Field as={Input} id="plan-branches" name="maxBranches" type="number" min="1" placeholder="Branches"/>

      </div>
       <div className='flex-1'>
        <label htmlFor='plan-users' className='block font-medium'>Users</label>
        <Field as={Input} id="plan-users" name="maxUsers" type="number" min="1" placeholder="Users"/>

      </div>
      <div className='flex-1'>
        <label htmlFor='plan-products' className='block font-medium'>Products</label>
        <Field as={Input} id="plan-products" name="maxProducts" type="number" min="1" placeholder="Products"/>

      </div>
     </div>

     {/* Feature Switches */}
     <div>
      <label htmlFor="" className='block font-medium mb-2'>Features</label>
      <FeatureSwitchGrid handleFeatureSwitch={handleFeatureSwitch} />
     </div>

     <div>
      <label htmlFor="" className='block font-medium mb-2'>Extra Features</label>
      <ExtraFeaturesList values={values} handleAddExtraFeatureChange={handleAddExtraFeatureChange} handleRemoveExtraFeatureChange={handleRemoveExtraFeatureChange} handleExtraFeatureChange={handleExtraFeatureChange}/>
     </div>

     <div>
      <Button disabled={isSubmitting} type="submit">Submit</Button>
     </div>

   </Form>




  )
}

export default PlanForm