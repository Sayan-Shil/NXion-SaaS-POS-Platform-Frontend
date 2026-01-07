import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart2,
  Calendar,
  Download,
  FilesIcon,
  FileText,
  TrendingUpDown,
  Users,
} from "lucide-react";
import React from "react";
import SalesChart from "../Dashboard/SalesChart";
import PaymentBreakdown from "../Dashboard/PaymentBreakdown";
import CashierPerformance from "../Dashboard/CashierPerformance";
import TopProducts from "../Dashboard/TopProducts";
import TodayOverview from "../Dashboard/TodayOverview";
import RecentOrders from "../Dashboard/RecentOrders";
import PaymentMethodChart from "./PaymentMethodChart";

function Reports() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">
          Reports And Analytics
        </h1>
        <div className="flex items-center gap-4 ">
          <Button variant={"outline"}>
            {" "}
            <Calendar /> Today
          </Button>
          <Button variant={"outline"}>
            {" "}
            <Download /> Export All
          </Button>
        </div>
      </div>
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview" className={"flex items-center gap-2"}>
            <BarChart2 className="w-4 h-4" />
            Overview
          </TabsTrigger>

          <TabsTrigger value="sales" className={"flex items-center gap-2"}>
            <TrendingUpDown className="w-4 h-4" />
            Sales
          </TabsTrigger>

          <TabsTrigger value="products" className={"flex items-center gap-2"}>
            <FileText />
            Products
          </TabsTrigger>

          <TabsTrigger value="cashier" className={"flex items-center gap-2"}>
            <Users className="w-4 h-4" />
            Cashier Performance
          </TabsTrigger>
        </TabsList>

        <TabsContent
          value="overview"
         
        >

          <div  className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-4 ">
           <SalesChart />
           <CashierPerformance />
          </div>

          <div className="mt-4">
    <PaymentBreakdown />
          </div>

      

          <div  className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-4 ">
           <TopProducts />
           <PaymentMethodChart />
          </div>
        </TabsContent>
        <TabsContent
          value="sales"
         
        >
          <SalesChart/>
        </TabsContent>
        <TabsContent
          value="products"
         
        ><TopProducts/></TabsContent>
        <TabsContent
          value="cashier"
         
        > <CashierPerformance /></TabsContent>
      </Tabs>
    </div>
  );
}

export default Reports;
