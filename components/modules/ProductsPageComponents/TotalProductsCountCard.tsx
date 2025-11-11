import { Card } from "@/components/ui/card";

//this is a component on the products page that shows the total number of assets in the ecommerce store.
const TotalProductsCountCard = () => {
  return (
    <Card className="bg-black flex flex-col gap-2 text-white p-5">
      <p className="text-4xl font-bold">
        1,535 <span className="text-lg">products</span>
      </p>
      <div className="flex gap-2">
        <span className="h-3 w-[45%] bg-lime-300 rounded-full block" />
        <span className="h-3 w-[39%] bg-amber-300 rounded-full block" />
        <span className="h-3 w-[16%] bg-red-200 rounded-full block" />
      </div>
      <div className="flex gap-2 items-center">
        <span className="h-2 w-2 rounded-full bg-lime-300" />
        <span>In Stock : 705 </span>
        <span className="h-2 w-2 rounded-full bg-amber-300" />
        <span>Low stock : 672 </span>
        <span className="h-2 w-2 rounded-full bg-red-200" />
        <span>Out of stock : 210</span>
      </div>
    </Card>
  );
};

export default TotalProductsCountCard;
