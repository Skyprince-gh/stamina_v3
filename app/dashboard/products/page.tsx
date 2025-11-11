import DashboardHeader from "@/components/modules/dashboardHeader";
import TotalProductsCountCard from "@/components/modules/ProductsPageComponents/TotalProductsCountCard";
import TotalAssetsValueCard from "@/components/modules/ProductsPageComponents/TotalAssetsValueCard";
import SelectedItemsCard from "@/components/modules/ProductsPageComponents/SelectedItemsCard";
import LiveUpdatesCard from "@/components/modules/DashboardCardComponents/LiveUpdatesCard";
import ButtonAndMenus from "@/components/modules/ProductsPageComponents/ButtonsAndMenus";
import ProductsDisplayGrid from "@/components/modules/ProductsPageComponents/ProductsGrid";
import PaginationBar from "@/components/modules/ProductsPageComponents/PaginationBar";

const ProductsPage: React.FC = () => {
  return (
    <div className="w-full px-5 h-full">
      <DashboardHeader title="OG Soronko" />
      <section title="action cards" className="flex gap-5 mt-10">
        <TotalAssetsValueCard />
        <TotalProductsCountCard />
        <SelectedItemsCard />
        <LiveUpdatesCard />
      </section>
      <section title="buttons and menus" className="mt-10">
        <ButtonAndMenus />
      </section>
      <section title="Products" className="mt-10">
        <ProductsDisplayGrid />
      </section>
      <PaginationBar className="mt-3"/>
    </div>
  );
};

export default ProductsPage;
