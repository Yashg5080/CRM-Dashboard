import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export const TopBar = () => {
  return (
    <div className="flex items-center justify-between p-6 bg-background border-b border-border">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">
          Hello Evano 👋,
        </h1>
      </div>
      
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search"
          className="pl-10 w-[300px] bg-card"
        />
      </div>
    </div>
  );
};