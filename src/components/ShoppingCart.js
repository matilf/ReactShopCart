import { useReducer } from "react";
import { TYPES } from "../actions/shoppingAction";
import {
  shoppingInitialState,
  shoppingReducer,
} from "../reducers/shoppingReducer";
import CartItem from "./CartItem";
import ProductItem from "./ProductItem";

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const { products, cart } = state;

  const addToCart = (id) => {
      /*a traves de dispatch desencadeno la funcion del reducer*/
      dispatch({type: TYPES.ADD_TO_CART, payload: id})
  };
  const DelFromCart = (id, all = false) => {
    /*all = true */
      if(all){
          dispatch({type: TYPES.REMOVE_ALL_FROM_CART, payload: id})
      }else{
      dispatch({type: TYPES.REMOVE_ONE_FROM_CART, payload: id})
      }
  };
  const clearCart = () => {
      dispatch({type: TYPES.CLEAR_CART})
  };

  return (
    <div>
      <h2> Shopping Cart </h2>
      <h3>Product List</h3>
      <article className="box grid-responsive" /*render de los productos */>
        {products.map((product) => (
          <ProductItem key={product.id} data={product} addToCart={addToCart} />
        ))}
      </article>
      
      <h3>Cart</h3>
      <article className="box conteinercart">
          <button className="clear" onClick={clearCart}> clear cart</button>
          {cart.map((item, index) => <CartItem key={index} data={item} DelFromCart={DelFromCart} />)}
      </article>
    </div>
  );
};

export default ShoppingCart;
