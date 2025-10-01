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

export const StatsCard_long = ({ children, title}: { children?: ReactNode, title:string}) => {
  return (
    <Card className="gap-2 h-full">
      <CardHeader>
        <CardTitle className="flex w-full justify-between items-center">
          {title}
          <span>
            <Ellipsis stroke="#99a1af" />
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="h-full">
        {children}        
      </CardContent>
    </Card>
  );
};

export default StatsCard_long;
