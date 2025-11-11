import { Checkbox } from "@/components/ui/checkbox";

const ProductsDisplayGrid = () => {
  const products = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]; // Placeholder for future dynamic data
  return (
    <>
      <div className="grid grid-cols-[1fr_2fr_2fr_5fr_3fr_3fr_4fr_6fr] pl-5 gap-3 bg-[#e9e9e9] h-10 items-center rounded-lg font-bold ">
        <span>
          <Checkbox className="bg-[#151515]" />
        </span>
        <span>{""}</span>
        <span>ID</span>
        <span>Name</span>
        <span>Quantity</span>
        <span>Price</span>
        <span>SKU/Barcode</span>
        <span>Description</span>
      </div>
      <div className="font-bold overflow-y-scroll no-scrollbar max-h-[calc(100vh-55vh)] shadow-2xl rounded-lg mt-5 border border-gray-200">
        {products.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-[1fr_2fr_2fr_5fr_3fr_3fr_4fr_6fr] pl-5 gap-3 h-10 items-center rounded-lg my-4 hover:bg-[#151515] hover:text-white "
          >
            <span>
              <Checkbox className="bg-[#151515]" />
            </span>
            <span>{""}</span>
            <span>P001</span>
            <span>Domino T- Rolls</span>
            <span>49</span>
            <span>$2.99</span>
            <span>323242321</span>
            <span>lorem ipsum dolor samet bil </span>
          </div>
        ))}
      </div>
      
    </>
  );
};

export default ProductsDisplayGrid;
