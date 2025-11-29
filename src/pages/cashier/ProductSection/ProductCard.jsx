import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import React from "react";
import { IndianRupee } from "lucide-react";

function ProductCard({ product }) {
  return (
    <div>
      <Card key={Math.random()} className="py-4 border hover:border-violet-500 hover:shadow-[0_0_10px_rgba(139,92,246,0.6)] transition duration-200">
        <CardContent className={""}>
          <div className="aspect-square bg-muted rounded-md mb-2 flex items-center justify-center">
            <img
              className="h-30 w-30 object-cover "
              src={product.image}
              alt=""
            />
          </div>
          <div>
            <h3 className="font-medium text-sm truncate">{product.name}</h3>
            <p className="text-xs text-muted-foreground">{product.sku}</p>
            <div className="flex items-center justify-between gap-2">
              <p className="font-semibold text-violet-500 flex items-center  ">
                <IndianRupee size={12} /> {product.sellingPrice}
              </p>
              <Badge variant="secondary" className="text-xs">
                {product.category}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default ProductCard;
