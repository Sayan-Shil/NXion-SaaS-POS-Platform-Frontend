import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Barcode, Search } from "lucide-react";
import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { products } from "@/data/products";

const ProductSection = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="w-2/5 flex flex-col border-r">
      <div className="p-4 border-b bg-muted">
        <Input
          className={"py-5"}
          value={searchTerm}
          placeholder="Search Products"
          type="text"
          onChange={handleSearchChange}
        />
        <div className="flex items-center justify-between pt-2">
        <span className="text-xs text-muted-foreground pl-2">{2} Product Founds</span>
        <Button variant="outline" size="sm" className={"text-xs"}><Barcode/>Scan</Button>
      </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 p-5 ">
        {products.map((product,index)=> (
           <ProductCard product={product} key={index}/>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
