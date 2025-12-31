import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import React from "react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

const data = [
  { name: "UPI", value: 40, percentage: 36 },
  { name: "CASH", value: 28, percentage: 25 },
  { name: "CARD", value: 22, percentage: 20 },
];

const COLORS = ["#7C3AED", "#8B5CF6", "#6D28D9"];

const renderCustomisedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
  const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));
  const percentValue = data[index]?.percentage ?? 0;

  return (
    <text
      x={x}
      y={y}
      fill="#FFFFFF"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={12}
      fontWeight={600}
    >
      {percentValue}%
    </text>
  );
};

function PaymentMethodChart() {
  const config = data.reduce((acc, item, idx) => {
    acc[item.name] = {
      label: item.name,
      color: COLORS[idx % COLORS.length],
    };
    return acc;
  }, {});

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-xl">Payment Methods</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        <ChartContainer config={config}>
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={90}
                labelLine={false}
                label={renderCustomisedLabel}
              >
                {data.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              {/* ✅ Styled shadcn tooltip (same as TopProducts) */}
              <ChartTooltip
                content={({ active, payload }) => (
                  <ChartTooltipContent
                    active={active}
                    payload={payload}
                    formatter={(value, name, { payload }) => [
                      `${payload.percentage}%`,
                      "Sales Percentage",
                    ]}
                  />
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>

        {/* Legend */}
        <div className="flex justify-center gap-6">
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

export default PaymentMethodChart;
