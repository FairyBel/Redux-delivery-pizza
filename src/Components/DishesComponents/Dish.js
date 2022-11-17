import { useState } from "react";
import { useDispatch } from "react-redux";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { addItemToCart } from "../../redux/cartSlice";

const Dish = ({dish}) =>{

    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    return(
        <div>
            <div className='card'>
            <img className="img-card" src={`./${dish.img}.jpg`} alt='pizza'/>
            <h2 className="card-text">{dish.name}</h2>
            <h3 className="card-text">{dish.price}</h3>
            <button className="card-btn" onClick={() => {dispatch(addItemToCart({dish,quantity}));
        }}>Заказать</button>
            
            <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
        </div>
        </div>
        
    )
}
export default Dish;