import {
  CheckCircle,
  Info,
  ShoppingCart,
  Star,
  Store,
  StoreIcon,
  Users,
} from "lucide-react";
import React from "react";

export const plans = [
  {
    id: 1,
    name: "Basic",
    price: 599,
    billingCycle: "monthly",
    description: "Ideal for small stores getting started with basic operations",
    maxBranches: 1,
    maxUsers: 2,
    maxProducts: 500,
    extraFeatures: [
      "Basic inventory management",
      "Single branch support",
      "Sales reports",
      "Email support",
    ],
  },
  {
    id: 2,
    name: "Pro",
    price: 899,
    billingCycle: "monthly",
    description:
      "Perfect for growing businesses with multiple users and branches",
    maxBranches: 3,
    maxUsers: 10,
    maxProducts: 3000,
    extraFeatures: [
      "Multi-branch management",
      "Advanced inventory tracking",
      "Sales & profit analytics",
      "Role-based user access",
      "Priority email support",
    ],
  },
  {
    id: 3,
    name: "Advanced",
    price: 2499,
    billingCycle: "monthly",
    description:
      "Designed for large-scale businesses with advanced management needs",
    maxBranches: 10,
    maxUsers: 50,
    maxProducts: 20000,
    extraFeatures: [
      "Unlimited sales analytics",
      "Advanced reporting & insights",
      "Custom roles & permissions",
      "Bulk product import/export",
      "API access",
      "Dedicated support",
    ],
  },
];

const currentSubscription = {
  plan: {
    id: 1,
  },
};

function Upgrade() {
  return (
    <div className="mac-w-5xl max-auto py-12 px-4">
      <h1 className="text-2xl font-bold tracking-tight text-center">
        Upgrade Your Subscription
      </h1>
      <div className="my-8 p-4 bg-violet-50 border border-gray-200 text-violet-500 flex items-center gap-3 rounded-md">
        <CheckCircle className="w-6 h-6 text-violet-500" />

        <div>
          <h1 className="font-bold tracking-tight">Current Plan: Basic</h1>
          <h2>Status: Active</h2>
          <h2>Valid till : 02/02/2025</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans?.map((plan) => (
          <div
            className={`bg-card rounded-2xl p-8 shadow-lg border flex flex-col relative ${
              currentSubscription.plan.id == plan.id
                ? "ring-2 ring-primary"
                : ""
            } `}
            key={plan.id}
          >
            {currentSubscription.plan.id == plan.id && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-primary-foreground py-0.5 px-2 font-medium rounded-lg text-sm items-center">
                  Your Plan
                </span>
              </div>
            )}

            <div className="text-center mb-8">
              <h3 className="text-lg font-bold ">{plan.name}</h3>
              <div className="flex items-baseline justify-center">
                <span className="text-4xl font-bold text-foreground">
                  ₹{plan.price}
                </span>
                <span className="ml-1 font-bold text-muted-foreground">
                  /{plan.billingCycle?.toLowerCase()}
                </span>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-2 mb-2 text-muted-foreground">
                <Info className="text-blue-500" />
                {plan.description}
              </li>
              <li className="flex items-center gap-2 mb-2 text-muted-foreground">
                <Store className="w-5 h-5 text-purple-500" />
                Max Branches: {plan.maxBranches}
              </li>
              <li className="flex items-center gap-2 mb-2 text-muted-foreground">
                <Users className="w-5 h-5 text-gray-500" />
                Max Users: {plan.maxUsers}
              </li>
              <li className="flex items-center gap-2 mb-2 text-muted-foreground">
                <ShoppingCart className="w-5 h-5 text-green-500" />
                Max Products: {plan.maxProducts}
              </li>
              <li className="mb-2 text-muted-foreground">
                <div className="flex items-center gap-2 font-medium">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Extra Features:
                </div>

                <ul className="ml-7 space-y-1 list-disc">
                  {plan.extraFeatures?.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Upgrade;
