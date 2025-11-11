import { Card, CardTitle } from "@/components/ui/card";

//this is a component on the products page that shows the total value of assets in the ecommerce store.
const TotalAssetsValueCard = () => {
    return ( 
        <Card className="bg-black flex flex-col text-white p-5">
            <CardTitle>Total Assets Value</CardTitle>
            <p className="text-4xl font-bold">$10,453,782</p>
        </Card>
     );
}
 
export default TotalAssetsValueCard;