import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const RecentReviewsContent = () => {
  const recentReviews = [
    {
      id: 1,
      sender: "Ama",
      message: "The chips are amazing I will like to order in bulk.",
      time: "3:45pm",
    },
    {
        id: 2,
        sender: "Kwame",
        message: "Great service, delivery was fast and the snacks were fresh.",
        time: "4:10pm",
    },
    {
        id: 3,
        sender: "Esi",
        message: "Loved the packaging! Will recommend to my friends.",
        time: "5:00pm",
    },
    {
        id: 4,
        sender: "Kojo",
        message: "Customer support was very helpful with my order.",
        time: "5:45pm",
    },
    {
        id: 5,
        sender: "Akosua",
        message: "The variety of chips is impressive. Will order again soon.",
        time: "6:15pm",
    },
    {
        id: 5,
        sender: "Abena",
        message: "The flavors are unique and delicious. Highly satisfied!",
        time: "6:15pm",
    },
  ];
  return (
    <ul className="flex flex-col gap-10">
      {recentReviews.map((review, index) => (
        <li key={index} className=" flex gap-2 border-l-2 bg-transparent boder-red-600 mt-10">
          <div className="flex gap-4 relative min-h-[30px] max-h-[90px] -left-4 bottom-9 ">
            <Avatar className="rounded-full">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <p>
                <span className="font-bold">{review.sender}</span>{" "}
                <span>{review.message}</span>
              </p>
              <div className="font-bold">{review.time}</div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default RecentReviewsContent;

//this is the component responsible for rendering the recent reviews content in the reviews card.
//It need some more work done. The height of each review item should be dynamic based on the content length.
//Also, the avatar images should be dynamic based on the user data.
//I will work on these improvements later.