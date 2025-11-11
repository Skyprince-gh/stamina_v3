import { Card, CardTitle } from "@/components/ui/card";

//this is a component on the products page that shows the total value of assets in the ecommerce store.
const SelectedItemsCard = () => {
    return ( 
        <Card className="bg-black flex flex-col text-white p-5">
            <CardTitle>Selected</CardTitle>
            <p className="text-4xl font-bold">0 <span className="text-lg">items</span></p>
        </Card>
     );
}
 
export default SelectedItemsCard;