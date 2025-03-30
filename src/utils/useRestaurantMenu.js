import { useEffect, useState } from "react";
import { MENU_API, MENU_DETAILS_API } from "./constants";

const useRestaurantMenu =(restaurantId) => {
    
const [resInfo,setResInfo] = useState(null);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () =>{
        //const data = await fetch(MENU_API + restaurantId);
        const data = await fetch(MENU_DETAILS_API);
        const json = await data.json();
        setResInfo(json.data);
    };

    return resInfo;
}

export default useRestaurantMenu;