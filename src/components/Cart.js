import Icon from '@mdi/react';
import { mdiChevronUp, mdiChevronDown, mdiDelete, mdiRobotConfusedOutline } from '@mdi/js';

function Cart({content, adjust, remove, clear}) {
    
    function createCartItems() {
        const cart = [];
        cart.push(<h3 key={`0`}>&nbsp;</h3>);
        cart.push(<h3 key={`1`}>Item</h3>);
        cart.push(<h3 key={`2`}>Qty</h3>);
        cart.push(<h3 key={`3`}>Price</h3>);
        cart.push(<h3 key={`4`}>&nbsp;</h3>)
        let total = 0;
        Object.values(content).forEach(({thumb, title, quantity, price}, i) => {
            total += price * quantity;
            cart.push(<img key={`${i}-0`} src={thumb} />)
            cart.push(<span key={`${i}-1`}>{title}</span>)
            cart.push(
                <div key={`${i}-2`} className="qty-box">
                    <Icon path={mdiChevronDown} size={.75} onClick={() => adjust(title, -1)} />
                    <span className="cart-qty">{quantity}</span>
                    <Icon path={mdiChevronUp} size={.75} onClick={() => adjust(title, 1)} />
                </div>
                )
            cart.push(<span className="cart-price" key={`${i}-3`}>{((price * quantity) / 100).toFixed(2)}</span>)
            cart.push(
                <div key={`${i}-4`} className='cart-delete'>
                    <Icon path={mdiDelete} size={.75} onClick={() => remove(title)} />
                </div>)
        })
        cart.push(<h2 key={`5`} className="cart-total">{(total / 100).toFixed(2)}</h2>)
        cart.push(<h2 key={`6`} className='cart-btm-fill'>&nbsp;</h2>)
        return cart;
    }

    const emptyCart = function() {
        return (
            <div className='cart-panel cart-empty'>
                <h1>Looks Like Your</h1>
                <Icon path={mdiRobotConfusedOutline} size={5} />
                <h1>Cart Is Empty</h1>
            </div>
        )
    }

    const fullCart = function() {
        return (
            <div className='cart-panel'>
            <h1>SHOPPING CART</h1>
            <div className="cart-items">
                {createCartItems() }
            </div>
            <div className='cart-button-box'>
                <button id='clr-btn' onClick={() => clear()}>Clear Cart</button>
                <button id='chk-btn'>Check Out</button>
            </div>
        </div>
        )
    }

    return Object.keys(content).length > 0 ? fullCart() : emptyCart();
}

export default Cart;