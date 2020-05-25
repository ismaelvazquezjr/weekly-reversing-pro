import CartItem from "./CartItem";

function Cart() {
    return (
        <div className="Cart">
            <h1><i className="fal fa-shopping-cart"></i> Cart Summary</h1>
            <CartItem 
                quantity={1} 
                type="Weekly Reversing Pro Subscription" 
                description="Receive high quality video walthroughs and written writeups delivered directly to your inbox once a week."
                price={4.99}/>
            <p className="Cart-total">Total: <span className="Cart-price">$4.99</span></p>

            <style jsx>{`
                .Cart {
                    background-color: #fff;
                    border: 3px solid #999;
                    font-size: 1.2rem;
                    padding: 25px;
                }

                .Cart h1 .fal {
                    margin-right: 15px;
                }

                .Cart-total {
                    text-align: right;
                }

                .Cart-price {
                    font-weight: 700;
                }
            `}</style>
        </div>
    );
}

export default Cart;