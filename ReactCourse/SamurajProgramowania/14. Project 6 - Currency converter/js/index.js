const Cash = (props) => {
    const { currencyTitle, currencyRatio, amount } = props;
    const value = (amount / currencyRatio).toFixed(2);
    return (
        <div>
            <span>{currencyTitle}: {amount <= 0 ? "" : value}</span>
        </div>)
}

class SelectOption extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { products, productSelected, handleSelect } = this.props;
        let mappedProducts = products.map(product => (
            <option key={product.id} value={product.name}>{product.name}</option>
        ))

        return (
            <div>
                <span>Select product: </span>
                <select
                    onChange={handleSelect}
                    value={productSelected}>
                    {mappedProducts}
                </select>
            </div>
        )
    }
}

class ExchangeCounter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            amount: "",
            productSelected: "Electricity",
            productValue: 0.50
        }
    }
    static defaultProps = {
        products: [
            {
                id: 1,
                name: "Electricity",
                unitName: "kWh",
                unitValue: 0.50

            },
            {
                id: 2,
                name: "Gasoline",
                unitName: "liters",
                unitValue: 7.10
            },
            {
                id: 3,
                name: "Oranges",
                unitName: "kilograms",
                unitValue: 7.99
            }
        ],
        currencies: [
            {
                id: 1,
                name: "dollar",
                ratio: 4.9,
                title: "Value in dollar"
            },
            {
                id: 2,
                name: "euro",
                ratio: 4.8,
                title: "Value in euro"
            }, {
                id: 3,
                name: "pound",
                ratio: 5.51,
                title: "Value in pound"
            },
            {
                id: 4,
                name: "zloty",
                ratio: 1,
                title: "Value in zloty"
            }
        ]
    }

    handleChangeInput = (event) => {
        this.setState({
            amount: event.target.value,
        })
    }

    handleSelect = (event) => {
        const { products } = this.props;

        this.setState({
            productSelected: event.target.value,
            amount: "",
            productValue: products.find(product => product.name === event.target.value).unitValue
        })
    }

    insertSuffix = () => {
        const { products } = this.props;
        return products.find(product => product.name === this.state.productSelected).unitName;
    }

    render() {
        const { products, currencies } = this.props;
        const { productSelected, amount } = this.state;

        const calculators = currencies.map(currency => {
            return <Cash
                key={currency.id}
                currencyTitle={currency.title}
                currencyRatio={currency.ratio}
                amount={this.state.amount * this.state.productValue}
            />
        });

        return (
            <div className="app">
                <SelectOption
                    productSelected={productSelected}
                    products={products}
                    handleSelect={this.handleSelect}
                />

                <label>
                    <input min="0" type="number"
                        value={amount}
                        onInput={this.handleChangeInput}></input>
                    <span> {this.insertSuffix()}</span>
                </label>
                {calculators}
            </div>
        )
    }
}

const rootDOM = document.querySelector("#root");
const createRoot = ReactDOM.createRoot(rootDOM);
createRoot.render(
    <React.StrictMode>
        <ExchangeCounter />
    </React.StrictMode >
);