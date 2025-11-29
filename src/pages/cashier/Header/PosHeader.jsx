import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { TextAlignJustify } from "lucide-react";
import React from "react";

function PosHeader() {
  return (
    <div className="bg-card border-b px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <Button>
            <TextAlignJustify />
          </Button>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-foreground">
            NXion POS Platform
          </h1>
          <p className="text-sm text-muted-foreground">Create New Order</p>
        </div>
        <div className="flex items-center space-x-2">
          <Avatar>
            <AvatarImage src="src\assets\profile.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}

export default PosHeader;
