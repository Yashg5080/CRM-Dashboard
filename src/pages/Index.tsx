import { AppSidebar } from "@/components/layout/AppSidebar";
import { TopBar } from "@/components/layout/TopBar";
import { StatsStrip } from "@/components/dashboard/StatsStrip";
import { CustomersTableCard } from "@/components/dashboard/CustomersTableCard";

const Index = () => {
  return (
    <div className="flex h-screen bg-background">
      <AppSidebar />
      <main className="flex-1 overflow-auto">
        <TopBar />
        <StatsStrip />
        <div className="px-6 pb-6">
          <CustomersTableCard />
        </div>
      </main>
    </div>
  );
};

export default Index;
