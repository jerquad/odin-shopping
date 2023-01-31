function Cart({content}) {
    
    return (
        <div className='cart-panel'>
            { Object.values(content)
                .map(({thumb, title, quantity}, i) => {
                    return (
                        <div key= {i} className="cart-item">
                            <img src={thumb} />
                            <span>{title}</span>
                            <span>{quantity}</span>
                        </div>
                    )
            })}
            <button onClick={() => console.log(content)}>CLICK</button>
        </div>
    );
}

export default Cart;