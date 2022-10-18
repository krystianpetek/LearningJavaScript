const ListItems = (props) => {
    const items = props.items.map(item => (
        <Item
            key={item.id}
            name={item.name}
            active={item.active}
            changeStatus={() => props.changeStatus(item.id)}
        />));

    return (
        <div className="list">
            <h1>Your order</h1>
            <ul>
                {items}
            </ul>
        </div>
    );
}