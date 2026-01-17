import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import React from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
  {
    name: "2025-12-21",
    sales: 420,
  },
  {
    name: "2025-12-22",
    sales: 480,
  },
  {
    name: "2025-12-23",
    sales: 560,
  },
  {
    name: "2025-12-24",
    sales: 610,
  },
  {
    name: "2025-12-25",
    sales: 690,
  },
];

function StoreRegistrationChart() {
  const config = {
    label: "Sales",
    color: "#3b82f6",
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle className={"text-xl"}>Store Registration Chart</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={config}>
          <ResponsiveContainer height={320} width={"100%"}>
            <BarChart data={data} >
              <XAxis
                dataKey={"name"}
                stroke="#888888"
                fontSize={"12"}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#888888"
                fontSize={"12"}
                tickLine={false}
                tickFormatter={(value) => `${value}`}
                axisLine={false}
              />
              <ChartTooltip
                content={({ active, payload }) => <ChartTooltipContent active={active} payload={payload} formatter={(value)=>[` ${value}`," Sales"]} />}
              />

               <Bar dataKey="sales" fill="#420e8a" radius={4} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default StoreRegistrationChart;
