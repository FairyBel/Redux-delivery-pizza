const ChangeQuantity = ({ quantity, setQuantity }) => {
  const addQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
  };

  const removeQuantity = () => {
    if (quantity <= 1) return;
    const newQuantity = quantity - 1;
    setQuantity(newQuantity);
  };

  return (
    <div className="cont-btn">
      <button className="btn" onClick={removeQuantity}>
        -
      </button>
      <p>{quantity}</p>
      <button className="btn" onClick={addQuantity}>
        +
      </button>
    </div>
  );
};

export default ChangeQuantity;
