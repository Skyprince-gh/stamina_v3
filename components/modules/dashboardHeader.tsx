import { Command, CommandInput } from "@/components/ui/command";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Bell } from "lucide-react";

const DashboardHeader = () => {
    return ( 
        <header className=" flex items-center h-[100px] justify-between w-full">
        <div>
          <h2 className="font-bold text-4xl">Dashboard</h2>
        </div>
        <div className="flex gap-5">
          <Command>
            <CommandInput
              placeholder="Search item, Order etc.."
              className="w-[300px]"
            />
          </Command>
          <div className="flex gap-5">
            <Avatar className="w-12 h-12">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="h-12 flex-col items-start">
              <h4 className="font-bold text-lg">Ahenkan</h4>
              <p className="font-thin text-sm">Owner</p>
            </div>
            <Popover>
              <PopoverTrigger className="bg-white h-12 w-12 flex justify-center items-center rounded-lg "><Bell/></PopoverTrigger>
              <PopoverContent>
                Place content for the popover here.
              </PopoverContent>
            </Popover> 
          </div>
        </div>
      </header>
     );
}
 
export default DashboardHeader;