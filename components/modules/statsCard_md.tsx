import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Ellipsis, TrendingDown, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ReactNode } from "react";

export const StatsCard_md = ({
  children,
  title,
  className,
  select,
  selectConfig,
}: {
  children?: ReactNode;
  title: string;
  className?: string;
  select?: boolean;
  selectConfig?: { title: string; options: string[] };
}) => {
  return (
    // make the card a column flex container and stretch to fill the grid cell
    <Card className="gap-2 flex flex-col h-full">
      <CardHeader>
        <CardTitle className="flex w-full font-bold text-2xl justify-between items-center">
          {title}
          <span>
            {select && selectConfig && (
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder={selectConfig.title} />
                </SelectTrigger>
                <SelectContent>
                  {selectConfig.options.map((option, index) => (
                    <SelectItem key={index} value={option.toLowerCase()}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          </span>
        </CardTitle>
      </CardHeader>
      {/* make the content area grow to fill remaining space so cards are equal height */}
      <CardContent className={`${className ?? ""} flex-1`}>{children}</CardContent>
    </Card>
  );
};

export default StatsCard_md;
