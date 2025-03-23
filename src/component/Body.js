import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () => {

    const[searchText,setSearchText] = useState("");

    const[filteredRestaurant,setFilteredRestaurant] = useState([{
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

    /*const listOfRestaurant = [{
        data:{
            restaurantName: "test",
            type:"F",
            costForTwo:4000,
            avgRating:"4.5",
            cuisine:["North India","fast food","Another food"]
        }
    },
    {
        data:{
            restaurantName: "test1",
            type:"F",
            costForTwo:4000,
            avgRating:"3",
            cuisine:["North India","fast food","Another food"]
        }
    }];*/

    if(listOfRestaurant.length === 0){
        return (<Shimmer/>);
    }

    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}></input>
                    <button onClick={()=>{
                        const filteredRestaurant = listOfRestaurant.filter((res)=> res.data.restaurantName.includes(searchText));
                        setListOfRestaurant(filteredRestaurant);
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={()=>{
                    let a = listOfRestaurant.filter((res)=> res.data.avgRating > 4);
                    setListOfRestaurant(a);
                }}>Top-Ratig button</button>
            </div>
            <div className="restaurant-container">
                {
                    
                    filteredRestaurant.map((restaurant,i) => 
                    <Link  key={i} to={"/restaurants/"+restaurant.data.id}><RestaurantCard resData={restaurant} /></Link>)
                }                
            </div>
        </div>
    );
}

export default Body;