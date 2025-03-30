import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Body = () => {

    const[searchText,setSearchText] = useState("");

    const {setUserName, loggedInUser} = useContext(UserContext);

    const onlineStatus = useOnlineStatus();

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    const[filteredRestaurant,setFilteredRestaurant] = useState([{
        data:{
            restaurantName: "test",
            type:"F",
            costForTwo:4000,
            avgRating:"4.5",
            cuisine:["North India","fast food","Another food"],
            id:1057448,
            promoted:true
        }
    },
    {
        data:{
            restaurantName: "test1",
            type:"F",
            costForTwo:4000,
            avgRating:"3",
            cuisine:["North India","fast food","Another food"],
            id:1057449,
            promoted:false
        }
    }]);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async() => {
        //to avoid cors error, this is just to bypass
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.4054486&lng=72.8308692&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();

        console.log(json);
    }



    const[listOfRestaurant, setListOfRestaurant] = useState([{
        data:{
            restaurantName: "test",
            type:"F",
            costForTwo:4000,
            avgRating:"4.5",
            cuisine:["North India","fast food","Another food"],
            id:1057448
        }
    },
    {
        data:{
            restaurantName: "test1",
            type:"F",
            costForTwo:4000,
            avgRating:"3",
            cuisine:["North India","fast food","Another food"],
            id:1057449
        }
    }]);

    if(listOfRestaurant.length === 0){
        return (<Shimmer/>);
    }

    if(onlineStatus=== false) return <h1>Internet is down.</h1>;

    return (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text" className="border border-solid border-black" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}></input>
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={()=>{
                        const filteredRestaurant = listOfRestaurant.filter((res)=> res.data.restaurantName.includes(searchText));
                        setListOfRestaurant(filteredRestaurant);
                    }}>Search</button>
                </div>
                <div className="search m-4 p-4">
                <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={()=>{
                    let a = listOfRestaurant.filter((res)=> res.data.avgRating > 4);
                    setListOfRestaurant(a);
                }}>Top-Ratig button</button>
                <label>User Name: </label>
                <input className="border border-black" onChange={(e)=>{setUserName(e.target.value)}} value={loggedInUser}/>
                </div>
            </div>
            <div className="flex flex-wrap">
                {
                    
                    filteredRestaurant.map((restaurant,i) => 
                    <Link  key={i} to={"/restaurants/"+restaurant.data.id}>
                        {
                            restaurant.data.promoted ? <RestaurantCardPromoted resData={restaurant}/> : <RestaurantCard resData={restaurant} />
                        }
                    </Link>)
                }                
            </div>
        </div>
    );
}

export default Body;