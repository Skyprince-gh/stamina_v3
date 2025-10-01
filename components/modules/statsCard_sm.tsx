import {
  Card, 
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Ellipsis, TrendingDown, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ReactNode } from "react";

export const StatsCard_sm = ({ children, title, pos, index, footer }: { children?: ReactNode, title:string, footer:string, pos:boolean, index:number}) => {
  return (
    <Card className="gap-2">
      <CardHeader>
        <CardTitle className="flex w-full justify-between items-center">
          {title}
          <span>
            <Ellipsis stroke="#99a1af"/>
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="text-5xl font-bold h-full relative">
        {children}
        <div className="flex w-full justify-end absolute bottom-0 right-5">
          <Badge className={`${pos ? "bg-lime-300": "bg-red-400"}  ${pos ? "text-lime-600": "text-red-600"} rounded-full`}>
            <span>
              {pos && <TrendingUp />}
              {!pos && <TrendingDown/>}
            </span>{" "}
            {pos?"+":"-"}{index}%
          </Badge>
        </div>
      </CardContent>
      <CardFooter className=" flex w-full justify-end text-sm text-gray-400">
        {footer}
      </CardFooter>
    </Card>
  );
};

export default StatsCard_sm;
