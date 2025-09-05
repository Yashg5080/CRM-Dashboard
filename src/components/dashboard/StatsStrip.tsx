import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, UserCheck, Activity, TrendingUp, TrendingDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const stats = [
  {
    title: "Total Customers",
    value: "5,423",
    change: "+16%",
    changeType: "increase",
    icon: Users,
    period: "this month",
  },
  {
    title: "Members",
    value: "1,893",
    change: "-1%",
    changeType: "decrease",
    icon: UserCheck,
    period: "this month",
  },
  {
    title: "Active Now",
    value: "189",
    icon: Activity,
    avatars: [
      "/api/placeholder/24/24",
      "/api/placeholder/24/24",
      "/api/placeholder/24/24",
      "/api/placeholder/24/24",
    ],
  },
];

export const StatsStrip = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {stats.map((stat) => {
        const Icon = stat.icon;
        const TrendIcon = stat.changeType === "increase" ? TrendingUp : TrendingDown;
        
        return (
          <Card key={stat.title} className="bg-white border-0 shadow-sm rounded-2xl p-6">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <Icon className="h-8 w-8 text-green-600" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-500 font-medium mb-1">{stat.title}</div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                {stat.change && (
                  <div className="flex items-center gap-1 text-sm">
                    <TrendIcon className={`h-4 w-4 ${
                      stat.changeType === "increase" ? "text-green-500" : "text-red-500"
                    }`} />
                    <span className={`font-medium ${stat.changeType === "increase" ? "text-green-500" : "text-red-500"}`}>
                      {stat.change}
                    </span>
                    <span className="text-gray-500">{stat.period}</span>
                  </div>
                )}
                {stat.avatars && (
                  <div className="flex -space-x-1 mt-3">
                    {stat.avatars.map((avatar, index) => (
                      <Avatar key={index} className="h-7 w-7 border-2 border-white">
                        <AvatarImage src={avatar} />
                        <AvatarFallback className="text-xs bg-gray-200">U</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};