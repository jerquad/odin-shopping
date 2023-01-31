function Cart({content}) {
    
    function CartItem({img, title, qty}) {
        return (
            <div className="cart-item">
                <img src={img} />
                <span>{title}</span>
                <span>{qty}</span>
            </div>
        )
    }

    function populateCart() {
        // console.log(Object.fromEntries(Object.entries(content)));
        const cart = [];
        

        Object.keys(content).forEach((item, i) => {
            console.log(item);
            cart.push(
                <CartItem 
                key={i}
                img={content[item].thumb}
                title={content[item].title}
                qty={content[item].quantity} />
            )
        })

        // content.forEach((item, i) => {
            // cart.push(
            //     <CartItem 
            //     key={i}
            //     img={item.thumb}
            //     title={item.title}
            //     qty={item.quantity} />
            // )
        // })
        return cart;
    
    }
    
    return (
        <div className='cart-panel'>
            {populateCart()}
        </div>
    );
}

export default Cart;