import { Sidebar } from "@/components/layout/Sidebar";
import { CustomerHeader } from "@/components/dashboard/CustomerHeader";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { CustomerTable } from "@/components/dashboard/CustomerTable";

const Index = () => {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="p-6">
          <CustomerHeader />
          <StatsCards />
          <CustomerTable />
        </div>
      </main>
    </div>
  );
};

export default Index;
