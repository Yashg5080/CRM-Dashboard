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
          <Card key={stat.title} className="border-border shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground mb-2">{stat.value}</div>
              
              {stat.change && (
                <div className="flex items-center space-x-1">
                  <TrendIcon 
                    className={`h-3 w-3 ${
                      stat.changeType === "increase" ? "text-success" : "text-destructive"
                    }`} 
                  />
                  <span 
                    className={`text-xs ${
                      stat.changeType === "increase" ? "text-success" : "text-destructive"
                    }`}
                  >
                    {stat.change}
                  </span>
                  <span className="text-xs text-muted-foreground">{stat.period}</span>
                </div>
              )}
              
              {stat.avatars && (
                <div className="flex -space-x-1 mt-2">
                  {stat.avatars.map((avatar, index) => (
                    <Avatar key={index} className="h-6 w-6 border-2 border-background">
                      <AvatarImage src={avatar} />
                      <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                        U{index + 1}
                      </AvatarFallback>
                    </Avatar>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};