import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select'
import { SelectValue } from '@radix-ui/react-select'
import { useFormik } from 'formik'
import React, { useEffect } from 'react'

function EmployeeForm({ initialData, onSubmit, roles }) {
  const formik = useFormik({
    initialValues: initialData || {
      fullname: "",
      email: "",
      password: "",
      phone: "",
      role: "",
      branchId: initialData ? initialData.branchId : ""
    },
    onSubmit: (values) => {
      console.log(values)
      onSubmit(values)
    }
  })

  useEffect(() => {
    if (initialData) {
      formik.setValues(initialData)
    } else {
      formik.resetForm()
    }
  }, [initialData])

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4 py-2">
      {/* Full Name */}
      <div className="space-y-2">
        <Label>Full Name</Label>
        <Input
          name="fullname"
          placeholder="Enter Employee Name"
          value={formik.values.fullname}
          onChange={formik.handleChange}
        />
      </div>

      {/* Email */}
      <div className="space-y-2">
        <Label>Email</Label>
        <Input
          name="email"
          placeholder="Enter Employee Email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
      </div>

      {/* Password */}
      <div className="space-y-2">
        <Label>Password</Label>
        <Input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
      </div>

      {/* Roles */}
      <div className="space-y-2">
        <Label>Roles</Label>
        <Select
          value={formik.values.role}
          onValueChange={(value) => formik.setFieldValue("role", value)}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Role" />
            <SelectContent>
              {roles.map((role) => (
                <SelectItem key={role} value={role}>
                  {role}
                </SelectItem>
              ))}
            </SelectContent>
          </SelectTrigger>
        </Select>
      </div>
      <div>
        <Button type={"submit"}>
            {initialData? "Save Changes" : "Add Employee"}
        </Button>
      </div>
    </form>
  )
}

export default EmployeeForm
