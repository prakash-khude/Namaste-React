import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {

    const {restaurantId} = useParams();

    const[showIndex, setShowIndex] = useState(null);

    const resInfo = useRestaurantMenu(restaurantId);

    if(resInfo === null) return (<Shimmer/>);

    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    return  (resInfo === null) ? <Shimmer/> : (
    <div className="text-center">
        <h1 className="font-bold m-6 text-2xl">{resInfo?.cards[2]?.card?.card?.info.name}</h1>
        <p className="font-bold text-lg">{resInfo?.cards[2]?.card?.card?.info.cuisines.join(',')} - {resInfo?.cards[2]?.card?.card?.info.costForTwoMessage}</p>
        {/** Categories accordion */}
        {
            categories.map((category, index) => <RestaurantCategory key={category?.card?.card.title} data={category?.card?.card} showItems={index=== showIndex ? true : false}
            setShowIndex={()=>setShowIndex(index)}/>)
        }
    </div>
    );    
};

export default RestaurantMenu;