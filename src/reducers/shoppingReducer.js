import { TYPES } from "../actions/shoppingAction";


//estado inicial de nuestro carrito de compras
export const shoppingInitialState = {
    products: [
        { id: 1, name: 'Product ', price: 100 },
        { id: 2, name: 'Product ', price: 200 },
        { id: 3, name: 'Product ', price: 300 },
        { id: 4, name: 'Product ', price: 400 },
        { id: 5, name: 'Product ', price: 500 },
        { id: 6, name: 'Product ', price: 600 },
    ],
    cart: [],
}
//reducer: funcion pura que recibe un estado y un objeto que son las acciones a cumplir, 
//el action contiene type y payload
export function shoppingReducer(state, action) {
    switch (action.type) {
        case TYPES.ADD_TO_CART: {
            let newItem = state.products.find((product) => product.id === action.payload);

            //caso de que ya este el producto en carrito
            // ir a la propiedad cart del state y encontrar el item que me pasan,
            // si es igual al nuevo item, guardamos en esta variable.
            // se retorna con ternario: 
            let itemInCart = state.cart.find((item) => item.id === newItem.id);
            //si la variable itemincart tiene uno ya ahi:
            return itemInCart
                ? {
                    /*...state es la copia del estado*/
                    ...state,
                    /*mapeo donde quantity se va a ir incrementando */
                    cart: state.cart.map((item) =>
                        item.id === newItem.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                }
                //si no hay de ese item en el carito
                : {
                    ...state,
                    cart: [...state.cart, { ...newItem, quantity: 1 }],
                };
        }
        case TYPES.REMOVE_ONE_FROM_CART: {
            //ver si el id existe para eliminarlo
            let itemToDelete = state.cart.find((item) => item.id === action.payload);

            //si el item to delete es mayor a uno hacemos la logica, si es menor eliminamos el producto


            return itemToDelete.quantity > 1
                ? {
                    ...state,
                    cart: state.cart.map((item) =>
                        item.id === action.payload
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                    ),
                }
                : {
                    ...state,
                    cart: state.cart.filter((item) => item.id !== action.payload),
                };
        }
        case TYPES.REMOVE_ALL_FROM_CART: {
            // copia del estado y filtra lo que quieres eliminar
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload),
            };
        }
        case TYPES.CLEAR_CART: {
            return shoppingInitialState
        }
        default:
            return state;
    }
}