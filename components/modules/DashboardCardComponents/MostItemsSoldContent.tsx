import Image from "next/image";
import BagImage from "@/public/images/bag.jpg";

const MostItemsSoldContent = () => {
  const itemsSold = [
    {
      name: "Beautiful Leather Bag",
      quantity: 50,
      date: "June 25, 2025",
      image: BagImage,
    },
    {
      name: "Beautiful Leather Bag",
      quantity: 50,
      date: "June 25, 2025",
      image: BagImage,
    },
    {
      name: "Beautiful Leather Bag",
      quantity: 50,
      date: "June 25, 2025",
      image: BagImage,
    },
    {
      name: "Beautiful Leather Bag",
      quantity: 50,
      date: "June 25, 2025",
      image: BagImage,
    },
    {
      name: "Beautiful Leather Bag",
      quantity: 50,
      date: "June 25, 2025",
      image: BagImage,
    },
    // {
    //   name: "Beautiful Leather Bag",
    //   quantity: 50,
    //   date: "June 25, 2025",
    //   image: BagImage,
    // },
    
   
  ];
  return (
    <ul className="flex flex-col gap-2">
      {itemsSold.map((item, index) => (
        <li key={index} className="flex justify-between m-2 font-bold">
          <div className="flex gap-4 items-center">
            <Image src={item.image} height={50} width={50} alt={item.name} />
            <span>{item.name}</span>
          </div>
          <div className=" flex gap-16">
            <span>{item.quantity}pcs</span> <span>{item.date}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MostItemsSoldContent;
