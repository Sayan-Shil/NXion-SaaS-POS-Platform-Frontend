import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import React from "react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

const data = [
  { name: "Men's T-Shirt", value: 40, percentage: 36 },
  { name: "Women's Dress", value: 28, percentage: 25 },
  { name: "Jeans", value: 22, percentage: 20 },
  { name: "Shoes", value: 18, percentage: 16 },
  { name: "Jackets", value: 12, percentage: 11 },
  { name: "Caps", value: 8, percentage: 7 },
];

const COLORS = [
  "#7C3AED",
  "#8B5CF6",
  "#6D28D9",
  "#A78BFA",
  "#5B21B6",
  "#C4B5FD",
];

const renderCustomisedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
  const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));
  const percentValue = data[index]?.percentage ?? percent * 100;

  return (
    <text
      x={x}
      y={y}
      fill="#FFFFFF"
      textAnchor="middle"
      fontWeight="bold"
      dominantBaseline="central"
    >
      {`${percentValue.toFixed(0)}%`}
    </text>
  );
};

function TopProducts() {
  const config = data.reduce((acc, item, idx) => {
    acc[item.name] = {
      label: item.name,
      color: COLORS[idx % COLORS.length],
    };
    return acc;
  }, {});

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Top Products</CardTitle>
      </CardHeader>

      <CardContent>
        <ChartContainer config={config}>
          <ResponsiveContainer width="100%" height={320}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={80}
                labelLine={false}
                label={renderCustomisedLabel}
              >
                {data.map((entry, index) => (
                  <Cell
                    fill={COLORS[index % COLORS.length]}
                    key={`cell - ${index}`}
                    en
                  />
                ))}
              </Pie>
              <ChartTooltip
                content={({ active, payload }) => (
                  <ChartTooltipContent
                    active={active}
                    payload={payload}
                    formatter={(value, name, { payload }) => [
                      `${payload.percentage}%`,
                      " Sales Percentage",
                    ]}
                  />
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
         <div className="flex flex-wrap justify-center gap-6">
          {data.map((item, index) => (
            <div key={item.name} className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-sm"
                style={{ backgroundColor: COLORS[index] }}
              />
              <span className="text-sm text-muted-foreground">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default TopProducts;
