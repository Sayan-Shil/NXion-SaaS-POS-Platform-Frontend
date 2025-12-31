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
    name: "Sayan Shil",
    sales: 420,
  },
  {
    name: "Arkaprava Roy",
    sales: 480,
  },
  {
    name: "Arpan Dey",
    sales: 560,
  },
  {
    name: "Bibek Barik",
    sales: 610,
  },
  {
    name: "Pritam Barui",
    sales: 690,
  },
];

function CashierPerformance() {
  const config = {
    label: "Sales",
    color: "#3b82f6",
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle className={"text-xl"}>Cashier Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={config}>
          <ResponsiveContainer height={320} width={"100%"}>
            <BarChart layout="vertical" data={data}>
              <XAxis
                type="number"
                // dataKey={"name"}
                stroke="#888888"
                fontSize={"12"}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `₹ ${value}`}
              />
              <YAxis
              dataKey={"name"}
              type="category"
                stroke="#888888"
                fontSize={"12"}
                tickLine={false}
                axisLine={false}
              />
              <ChartTooltip
                content={({ active, payload }) => (
                  <ChartTooltipContent
                    active={active}
                    payload={payload}
                    formatter={(value) => [`₹ ${value}`, " Revenue"]}
                  />
                )}
              />

              <Bar dataKey="sales" fill="#420e8a" radius={4} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default CashierPerformance;
