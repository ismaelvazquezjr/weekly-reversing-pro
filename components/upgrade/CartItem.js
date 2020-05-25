function CartItem(props) {
    return (
        <div className="CartItem">
            <p className="CartItem-title-container"><span className="CarItem-header"><span className="CarItem-quantity">{props.quantity} x </span><span className="CartItem-title">{props.type}</span></span><span className="CartItem-price">${props.price}</span></p>
            <p className="CartItem-description">{props.description}</p>
            <style jsx>{`
                .CartItem {
                    border-bottom: 1px solid #aaa;
                }
                .CartItem-title-container {
                    align-items: center;
                    font-weight: 700;
                    display: flex;
                    justify-content: space-between;
                }

                .CartItem-price {
                    padding-left: 20px;
                }

                .CarItem-header {
                    align-items: center;
                    display: flex;
                }

                .CarItem-quantity {
                    min-width: 40px;
                }

                .CartItem-description {
                    font-color: #999;
                    font-size: 0.9rem;
                    max-width: 80%;
                }

            `}</style>
        </div>
    );
}

export default CartItem;