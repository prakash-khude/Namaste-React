import { LOGO_URL } from "../utils/constants";
const RestaurantCard = (props) => {
    const {resData} = props;
    const {restaurantName,cuisine,avgRating,costForTwo} = resData?.data;
    return (
    <div className="m-4 p-4 w-[200px] rounded-lg hover:bg-amber-400">
        <img className="restaurant-logo rounded-lg" src={LOGO_URL} alt="res-logo"/>
        <h3 className="font-bold py-1 text-lg capitalize">{restaurantName}</h3>
        <h4>{cuisine.join(",")}</h4>
        <h5>{avgRating}</h5>
        <h6>Rupees {costForTwo} for 2</h6>
    </div>
    );
}

//higher Order Component

// Input Restuarant card
// output Restaurant card promoted
export const withPromotedLabel = (RestaurantCard)=>{
    return (props) => {
        return(
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}


export default RestaurantCard;