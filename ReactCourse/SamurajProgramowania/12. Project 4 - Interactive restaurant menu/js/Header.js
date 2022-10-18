const Header = (props) => {
    const active = props.items.filter(x => x.active).length;
    return (
        <header>
            <h2>Order summary {active}</h2>
            <h2>For payment: {active ? active * 10 : `if you don't buy, you don't pay!`} PLN</h2>
        </header>
    );
}