import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const StockLevelContent: React.FC = () => {
  const returnStockLevelData = (
    itemName: string,
    total: number,
    inStock: number
  ) => {
    const percentage = Math.round((inStock / total) * 100);
    return {
      itemName,
      percentage,
      total,
      inStock,
    };
  };

  const stockLevelData = [
    returnStockLevelData("Silk blend Summer Dress", 110, 75),
    returnStockLevelData("Casual Shirt", 80, 50),
    returnStockLevelData("Denim Jeans", 60, 20),
    returnStockLevelData("Leather Jacket", 40, 10),
    returnStockLevelData("Sneakers", 60, 30),
    returnStockLevelData("Formal Trousers", 50, 40),
  ];

  return (
    <>
      <div className="flex justify-between">
        <div className="w-4/10">
          <div>Total Stock</div>
          <div>
            <span className="text-3xl font-bold">225</span>{" "}
            <span className="text-sm font-bold text-gray-400">/350</span>{" "}
          </div>
        </div>
        <div className="w-4/10">
          <p className="text-gray-400 font-bold">Stock Status</p>
          <Badge variant="default" className="text-md">
            Sufficient
          </Badge>
        </div>
      </div>
      <ul className="mt-5">
        {stockLevelData.map((item, index) => (
          <li key={index} className="my-2">
            <div className="flex justify-between">
              <span>{item.itemName}</span> <span>{item.inStock} of {item.total} remaining</span>
            </div>

            <Progress value={item.percentage} color="#C0D061" />
          </li>
        ))}
      </ul>
    </>
  );
};

export default StockLevelContent;
