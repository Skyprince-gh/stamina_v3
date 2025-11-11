import { Card, CardTitle } from "@/components/ui/card";

//this is a component on the products page that shows the total value of assets in the ecommerce store.
const LiveUpdatesCard = () => {
  const updates = [
    {
      entityName: "Abena 1234",
      enitityID: "usr1234t509",
      actions: [
        "Purchase",
        "Birkin Bag",
        "Iphone case",
        "Iphone case",
        "lulu makeup kit mx",
        "+5 other things",
      ],
      amount: 5800.64,
    },
    {
      entityName: "Kofi 5678",
      enitityID: "usr5678t901",
      actions: [
        "Purchase",
        "Nike Sneakers",
        "Designer Watch",
        "Sunglasses",
        "+3 other things",
      ],
      amount: 1250.0,
    },
    {
      entityName: "Ama 9876",
      enitityID: "usr9876t234",
      actions: ["Purchase", "MacBook Pro", "USB-C Adapter", "+2 other things"],
      amount: 2149.99,
    },
    {
      entityName: "Yaw 4321",
      enitityID: "usr4321t678",
      actions: ["Purchase", "Leather Handbag", "Silk Scarf", "Ankle Socks"],
      amount: 420.5,
    },
    {
      entityName: "Esi 2468",
      enitityID: "usr2468t135",
      actions: [
        "Purchase",
        "Evening Dress",
        "Earrings",
        "Makeup kit",
        "+1 other thing",
      ],
      amount: 299.99,
    },
  ];
  return (
    <Card className="bg-black flex flex-col text-white p-5 max-h-[150px]">
      <CardTitle>Live Updates</CardTitle>
      <ul className="flex flex-col gap-2 overflow-y-scroll no-scrollbar">
        {updates.map((update) => (
          <li
            key={update.enitityID}
            className={`border-l-8 ${
              [
                "border-green-300",
                "border-blue-300",
                "border-red-300",
                "border-yellow-300",
                "border-pink-300",
                "border-indigo-300",
                "border-purple-300",
                "border-emerald-300",
              ][Math.floor(Math.random() * 8)]
            } pl-2`}
          >
            {update.entityName} | {update.actions.join(", ")} -{" "}
            {"$" + update.amount.toFixed(2)}
          </li>
        ))}
      </ul>
    </Card>
  );
};


export default LiveUpdatesCard;
