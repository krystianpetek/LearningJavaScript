class ShoppingCart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            shoppingCart: 1,
            availableProducts: 7
        }
    }

    handleOparation = (props) => {
        const { availableProducts, shoppingCart } = this.state
        if (props === "+" && availableProducts > 0) {
            this.setState({ shoppingCart: shoppingCart + 1 })
        }
        else if (props === "-" && shoppingCart > 0) {
            this.setState({ shoppingCart: shoppingCart - 1 })
        }
    }

    handleBuy = () => {
        const { availableProducts, shoppingCart } = this.state
        this.setState({
            availableProducts: availableProducts - shoppingCart,
            shoppingCart: 0
        })
    }

    render() {
        const { availableProducts, shoppingCart } = this.state
        const style = shoppingCart === 0 ? { opacity: 0.3 } : {};
        return (
            <div>
                <button
                    onClick={this.handleOparation.bind(this, "-")}
                    disabled={shoppingCart <= 0}>-</button>

                <span style={style}> {shoppingCart} </span>

                <button
                    onClick={this.handleOparation.bind(this, "+")}
                    disabled={shoppingCart >= availableProducts}>+</button>

                {shoppingCart > 0 &&
                    <button onClick={this.handleBuy.bind(this)}>BUY</button>}
            </div>
        );
    }
}

const root = document.querySelector("#root");
ReactDOM.render(<ShoppingCart />, root);