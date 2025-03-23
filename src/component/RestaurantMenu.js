import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);
    const {restaurantId} = useParams();

    useEffect(()=>{
        console.log("fetching menus");
        fetchMenu();
    },[]);

    const fetchMenu =async () =>{
        const data = await fetch(MENU_API + restaurantId);
        const json = await data.json();
        setResInfo(json.data);        
    }    

    if(resInfo === null) return (<Shimmer/>);

    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return  (resInfo === null) ? <Shimmer/> : (<div classname="menu">
        <h1>{resInfo?.cards[2]?.card?.card?.info.name}</h1>
        <p>{resInfo?.cards[2]?.card?.card?.info.cuisines.join(',')} - {resInfo?.cards[2]?.card?.card?.info.costForTwoMessage}</p>
        <h3>Menu</h3>
        <ul>
            {
            itemCards.map((item) => (
                <li key={item?.card?.info?.name}>{item?.card?.info?.name} - Rs.{item?.card?.info?.price/100 || "100" }</li>
            )) 
            }    
        </ul>    
    </div>);    
};

export default RestaurantMenu;