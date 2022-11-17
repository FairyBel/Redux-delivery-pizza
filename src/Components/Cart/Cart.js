import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";
import CartItem from "./CartItem";


const Cart = () => {

    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);

    return(
        <div  className="cont-info">
            <img className="cartIcon" src='https://img.freepik.com/free-vector/particle-shopping-cart-item-buy-buttons-shopping-basket-design_460848-6974.jpg?w=996&t=st=1668607017~exp=1668607617~hmac=b380e991e78e7b53e9e5be93b9e4bfdcf4ae11b96ed1a6354f45e53121d84267' alt='cart'/>
            <h3>Итого к оплате: {totalPrice}</h3>
            {cartItems.map((cartItem, index) => <CartItem key={index} cartItem={cartItem}/>)}
            <br/>
            <button className="card-btn">Оформить заказ</button>
            
        </div>
    )
}

export default Cart;