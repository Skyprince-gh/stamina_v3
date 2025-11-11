import DashboardHeader from "@/components/modules/dashboardHeader";
import { StatsCard_sm as StatsCard } from "@/components/modules/statsCard_sm";
import { StatsCard_md as StatsCardMd } from "@/components/modules/statsCard_md";
import { StatsCard_long as StatsCardLg } from "@/components/modules/statsCard_long";
import ProfitByCategoryContent from "@/components/modules/DashboardCardComponents/ProfitByCategoryContent";
import OrderSummaryContent from "@/components/modules/DashboardCardComponents/OrderSummaryContent";
import TrafficSourceContent from "@/components/modules/DashboardCardComponents/TrafficSorceContent";
import StockLevelContent from "@/components/modules/DashboardCardComponents/StockLevelContent";
import MostItemsSoldContent from "@/components/modules/DashboardCardComponents/MostItemsSoldContent";
import RecentReviewsContent from "@/components/modules/DashboardCardComponents/RecentReviewsContent";

const Dashboard = () => {
  const TimeFrameConfig = {
    title: "This year",
    options: ["Today", "This week", "This Month", "This Year"],
  };
  return (
    <div className="w-full px-5 h-full">
      <DashboardHeader title="Dashboard" />
      <div className="grid grid-cols-10 grid-rows-8 gap-4">
        <div className="col-span-2 h-[150px]">
          <StatsCard
            title="Total Products Sold"
            footer="From last week"
            pos={true}
            index={13}
          >
            4,892
          </StatsCard>
        </div>
        <div className="col-span-2">
          <StatsCard
            title="Available Stock"
            footer="From last week"
            pos={false}
            index={6.53}
          >
            2,137
          </StatsCard>
        </div>
        <div className="col-span-2">
          <StatsCard
            title="Low Stock"
            footer="From last week"
            pos={true}
            index={16}
          >
            1962
          </StatsCard>
        </div>
        <div className="col-span-2">
          <StatsCard
            title="Out of Stock"
            footer="From last week"
            pos={false}
            index={3.87}
          >
            803
          </StatsCard>
        </div>
        <div className="col-span-2 row-span-3">
          <StatsCardLg title="Traffic Sources">
            <TrafficSourceContent />
          </StatsCardLg>
        </div>
        <div className="col-span-5 row-span-2">
          <StatsCardMd
            title="Profit by Category"
            select
            selectConfig={TimeFrameConfig}
          >
            <ProfitByCategoryContent />
          </StatsCardMd>
        </div>
        <div className="col-span-3 row-span-2">
          <StatsCardMd
            title="Order Summary"
            select
            selectConfig={TimeFrameConfig}
          >
            <OrderSummaryContent />
          </StatsCardMd>
        </div>
        <div className="col-span-3 row-span-2">
          <StatsCardMd
            title="Stock Level"
            select
            selectConfig={TimeFrameConfig}
          >
            <StockLevelContent />
          </StatsCardMd>
        </div>
        <div className="col-span-5 row-span-2 ">
          <StatsCardMd
            title="Most Items Sold"
            select
            selectConfig={TimeFrameConfig}
          >
            <MostItemsSoldContent />
          </StatsCardMd>
        </div>
        <div className="col-span-2 row-span-5">
          <StatsCardLg title="Recent Reviews">
            <RecentReviewsContent />
          </StatsCardLg>
        </div>
        <div className="col-span-8 row-span-3"><StatsCardMd title="Products"></StatsCardMd></div>
      </div>
    </div>
  );
};

export default Dashboard;
