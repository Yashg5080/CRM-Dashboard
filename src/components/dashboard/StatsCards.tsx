import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, TrendingUp, DollarSign, Phone } from "lucide-react";

const stats = [
  {
    title: "Total Customers",
    value: "2,847",
    change: "+12.5%",
    changeType: "increase",
    icon: Users,
  },
  {
    title: "Active Leads",
    value: "1,234",
    change: "+8.2%",
    changeType: "increase",
    icon: TrendingUp,
  },
  {
    title: "Revenue",
    value: "$84,350",
    change: "+23.1%",
    changeType: "increase",
    icon: DollarSign,
  },
  {
    title: "Calls Today",
    value: "42",
    change: "-2.4%",
    changeType: "decrease",
    icon: Phone,
  },
];

export const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card key={stat.title} className="border-border shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <p
                className={`text-xs ${
                  stat.changeType === "increase"
                    ? "text-success"
                    : "text-destructive"
                }`}
              >
                {stat.change} from last month
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};