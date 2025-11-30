import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Formik, Form } from "formik";
import { Mail, PhoneCall, User2 } from "lucide-react";
import React from "react";

function CustomerForm({ showCustomerForm, setShowCustomerForm }) {
  const initialValues = {
    fullName: "",
    phone: "",
    email: "",
  };

  return (
    <Dialog open={showCustomerForm} onOpenChange={setShowCustomerForm}>
      <DialogContent className={"max-h-3xl "}>
        <DialogHeader>
          <DialogTitle>Add A Customer</DialogTitle>
        </DialogHeader>

        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            console.log("Form Submitted:", values);
          }}
        >
          {({ values, handleChange, handleBlur }) => (
            <Form className="space-y-7 p-6 rounded-2xl border bg-white/70 backdrop-blur-sm shadow-[0_0_25px_rgba(140,100,255,0.08)] transition">

  {/* Full Name */}
  <div className="relative">
    <label className="absolute -top-3 left-3 bg-white text-xs px-1 text-violet-600 font-medium">
      Full Name
    </label>
    <div className="flex items-center gap-2 border rounded-xl px-3 h-12 focus-within:ring-2 focus-within:ring-violet-400 transition">
      <User2 className="w-4 h-4 text-violet-500" />
      <Input
        name="fullName"
        placeholder="Your Name"
        value={values.fullName}
        onChange={handleChange}
        onBlur={handleBlur}
        className="border-none focus-visible:ring-0"
      />
    </div>
  </div>

  {/* Phone */}
  <div className="relative">
    <label className="absolute -top-3 left-3 bg-white text-xs px-1 text-violet-600 font-medium">
      Phone Number
    </label>
    <div className="flex items-center gap-2 border rounded-xl px-3 h-12 focus-within:ring-2 focus-within:ring-violet-400 transition">
      <PhoneCall className="w-4 h-4 text-violet-500" />
      <Input
        name="phone"
        placeholder="+91 XXXXX XXXXX"
        value={values.phone}
        onChange={handleChange}
        onBlur={handleBlur}
        className="border-none focus-visible:ring-0"
      />
    </div>
  </div>

  {/* Email */}
  <div className="relative">
    <label className="absolute -top-3 left-3 bg-white text-xs px-1 text-violet-600 font-medium">
      Email
    </label>
    <div className="flex items-center gap-2 border rounded-xl px-3 h-12 focus-within:ring-2 focus-within:ring-violet-400 transition">
      <Mail className="w-4 h-4 text-violet-500" />
      <Input
        name="email"
        placeholder="example@mail.com"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        className="border-none focus-visible:ring-0"
      />
    </div>
  </div>

  {/* Button */}
  <Button
    type="submit"
    className="w-full h-12 rounded-xl bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-700 hover:to-violet-800 text-white font-semibold tracking-wide shadow-lg hover:shadow-xl transition-all"
  >
    Save Customer
  </Button>

</Form>

          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
}

export default CustomerForm;
