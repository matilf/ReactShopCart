//data viene del estado inicial del producto
  const ProductItem = ({data, addToCart}) => {
      //en data recbe el id el nombre y el precio
      let {id, name, price} = data;


      return(
    <div style={{border: "thin solid black", padding: "2rem"}}>
 <h4>{name}</h4>
 <h4>${price}</h4>
 {/*se sabe que producto agregar a traves del id*/}
 <button onClick={() => addToCart(id)}>add</button>
    </div>
)
}

export default ProductItem

