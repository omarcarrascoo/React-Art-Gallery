export const CartItem =({cartInfo})=>{
    const subTotal = (cartInfo.precio * cartInfo.cantidad);
    return(
        <div className="cart__card">
            <div className="cart__img">
                <img src={cartInfo.img} alt="foto del producto" />
            </div>
            <div className="cart__text">
                <p className="title">{cartInfo.nombre}</p>
                <p className="price">Precio por pieza: ${cartInfo.precio}</p>
                <p className="cantidad">Cantidad seleccinada: {cartInfo.cantidad}</p>
            </div>
            <div className="subtotal">
                <p>${subTotal}</p>
            </div>
            <div className="div">
                <button>Borrar</button>
            </div>
        </div>
    )
}