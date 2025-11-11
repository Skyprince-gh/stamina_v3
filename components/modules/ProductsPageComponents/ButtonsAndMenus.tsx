import { Button } from "@/components/ui/button";
import { SlidersVertical, Plus, ChevronDown } from "lucide-react";
const ButtonAndMenus = () => {
  return (
    <div className="flex gap-5 ">
      <Button variant="default">
        Category: Food <ChevronDown />
      </Button>
      <Button variant="default">
        Order By: Asc. <ChevronDown />
      </Button>
      <Button variant="default">
        Sort By: Price <ChevronDown />
      </Button>
      <Button variant="default">
        Add <Plus />
      </Button>
      <Button variant="default">
        Options <SlidersVertical />{" "}
      </Button>
    </div>
  );
};

export default ButtonAndMenus;
