import { LOGO_URL } from "../utils/constants";
const RestaurantCard = (props) => {
    const {resData} = props;
    const {restaurantName,cuisine,avgRating,costForTwo} = resData?.data;
    return (
    <div className="restaurant-card" style={{backgroundColor: "#f0f0f0"}}>
        <img className="restaurant-logo" src={LOGO_URL} alt="res-logo"/>
        <h3>{restaurantName}</h3>
        <h4>{cuisine.join(",")}</h4>
        <h5>{avgRating}</h5>
        <h6>Rupees {costForTwo} for 2</h6>
    </div>
    );
}

export default RestaurantCard;