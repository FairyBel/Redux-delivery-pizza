import { useDispatch } from "react-redux";
import dataPizza from "../../data/dataPizza";
import { removeItemFromCart } from "../../redux/cartSlice";

const CartItem = ({ cartItem }) => {
  const dishes = dataPizza.find((item) => item.id === cartItem.dishId);

  const dispatch = useDispatch();

  return (
    <div>
      <p>{dishes.name}</p>
      <p>{cartItem.quantity} штука(и)</p>
      <p>Стоимость: {dishes.price * cartItem.quantity} руб.</p>
      <span
        onClick={() =>
          dispatch(removeItemFromCart({ cartItemId: cartItem.id }))
        }
      >
        <img
          className="icon"
          src="https://cdn-icons-png.flaticon.com/512/1252/1252000.png?w=740&t=st=1668618410~exp=1668619010~hmac=7f5afd6fc8a65dd4cb0b24945eb870db437f828e68dedf184bcb6f57940d8147"
          alt="trash-icon"
        />
      </span>
    </div>
  );
};

export default CartItem;
