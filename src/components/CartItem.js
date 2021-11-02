 
const CartItem = ({data, DelFromCart} ) => {
    let {id, name, price, quantity} = data;

    return(
      <div className="cartitem box grid-responsive"style={{borderBottom: "thin solid grey"}}>
          <h4>{name}</h4>
          <h5>${price} X {quantity} =${price * quantity}</h5>
          <button className="buttondelete" onClick={() => DelFromCart(id)} >Delete</button>
          <button  className="buttondelete" onClick={() => DelFromCart(id, true)}>Delete All</button>
      </div>
  )
}

export default CartItem

