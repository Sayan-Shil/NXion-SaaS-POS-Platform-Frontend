import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Save } from "lucide-react";
import React, { useState } from "react";

const workingDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

function BranchInfo() {
  const [branchInfo, setBranchInfo] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    workingDays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  });
  const handleBranchInfo = (field, value) => {
    setBranchInfo({
      ...branchInfo,
      [field]: value,
    });
  };

  const handleSaveSettings = () => {
    console.log("Branch Info");
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>Branch Information</CardTitle>
        <CardDescription>Update Your Branch Details</CardDescription>
      </CardHeader>

      <CardContent className={"space-y-64"}>
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium">Branch Name</label>

              <Input
                name="name"
                placeholder="Enter Branch Name"
                value={branchInfo.name}
                onChange={(e) => handleBranchInfo("name", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Branch Address</label>

              <Input
                name="address"
                placeholder="Enter Branch Address"
                value={branchInfo.address}
                onChange={(e) => handleBranchInfo("address", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Branch Phone Number</label>

              <Input
                name="phone"
                placeholder="Enter Branch Phone Number"
                value={branchInfo.phone}
                onChange={(e) => handleBranchInfo("phone", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Branch Email</label>

              <Input
                name="email"
                placeholder="Enter Branch Email"
                value={branchInfo.email}
                onChange={(e) => handleBranchInfo("email", e.target.value)}
              />
            </div>
          </div>
          <Separator />
          <div className="mt-4">
            <label className="text-sm font-medium" htmlFor="">
              Working Days
            </label>
            <div className="grid grid-cols-2 gap-2 mt-2 md:grid-cols-4">
              {workingDays.map((day, index) => (
                <div key={index} className="flex items-center gap-3 ">
                  <Checkbox
                    onCheckedChange={(checked) => {
                      if (checked) {
                        handleBranchInfo("workingDays", [
                          ...branchInfo.workingDays,
                          day,
                        ]);
                      } else {
                        handleBranchInfo(
                          "workingDays",
                          branchInfo.workingDays.filter((d) => d !== day)
                        );
                      }
                    }}
                    checked={branchInfo.workingDays.includes(day)}
                  />
                  <Label className={"text-sm text-gray-700"}>{day}</Label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div>
          <Button onClick={handleSaveSettings}>
            <Save className="w-4 h-4" />
            Save Changes
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default BranchInfo;
