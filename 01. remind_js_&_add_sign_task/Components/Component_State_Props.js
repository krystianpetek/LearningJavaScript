class ShoppingList extends React.Component {
    state = {
        items1: "ogórki",
        items2: "sok",
        items3: "coś do picia",
    };

    render() {
        return (
            <>
                <h1>Lista zakupów</h1>
                <ItemList item={this.state.items1} number={2 + 2} />
                <ItemList item={this.state.items2} />
                <ItemList item={this.state.items3} />
                <br />
                <ItemListClass item={this.state.items1} number={2 + 20} />
                <ItemListClass item={this.state.items2} />
                <ItemListClass item={this.state.items3} />
            </>
        );
    }
}

// function component
const ItemList = (props) => {
    return (
        <li>{props.item}, {props.number}</li>
    );
};

// class component
class ItemListClass extends React.Component {
    render() {
        return (
            <li>{this.props.item}, {this.props.number}</li>
        )
    }
}

ReactDOM.render(<ShoppingList />, document.getElementById("root"));
