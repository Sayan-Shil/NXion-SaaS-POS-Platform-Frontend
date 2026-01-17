import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Trash2Icon } from "lucide-react";
import React from "react";

function ExtraFeaturesList({
  values,
  handleExtraFeatureChange,
  handleRemoveExtraFeatureChange,
  handleAddExtraFeatureChange,
}) {
  return (
    <div className="space-y-2">
      {values.extraFeatures.map((feature, idx) => (
        <div className="flex items-center gap-2" key={idx}>
          <Input
            value={feature}
            onChange={(e) => handleExtraFeatureChange(idx, e.target.value)}
            placeholder="Extra Feature"
          />
          <Button 
            type="button" // Prevents form submit
            disabled={values.extraFeatures.length === 1 && !values.extraFeatures[0]} 
            variant={"ghost"} 
            onClick={() => handleRemoveExtraFeatureChange(idx,values)}
          >
          { values.extraFeatures.length !== 1 &&  <Trash2Icon/>}
          </Button>
        </div>
      ))}
      <Button 
        type="button" // Prevents form submit
        variant="outline" 
        className="mt-2"
        onClick={handleAddExtraFeatureChange}
      >
        <Plus className="w-4 h-4 mr-2" /> Add feature
      </Button>
    </div>
  );
}

export default ExtraFeaturesList;
