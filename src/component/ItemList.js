import { IMG_URL } from "../utils/constants";

const ItemList = ({items}) => {
    return (
    <div>
        {items.map((item) => 
        <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between" >
           
            <div className="w-9/12">
                <div className="py-2">
                    <span>{item.card.info.name} - </span>
                    <span>₹. {item.card.info.price/100}</span>
                </div>            
                <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="p-2 m-2 w-3/12">    
                <div className="absolute">            
                    <button className="p-2 shadow-lg mx-35 rounded-2xl bg-black text-white cursor-pointer">Add +</button>
                </div>
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks2024/74020427A.png" className="w-fit" />
            </div>
            
        </div>)}        
    </div>);
}

export default ItemList;