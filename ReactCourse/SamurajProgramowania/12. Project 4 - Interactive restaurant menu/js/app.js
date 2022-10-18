class App extends React.Component {
    state = {
        items: [
            { id: 1, name: "tea", active: true },
            { id: 2, name: "potatoes", active: false },
            { id: 3, name: "rise", active: false },
            { id: 4, name: "water soup", active: false },
            { id: 5, name: "boiling water", active: false },
            { id: 6, name: "bread", active: true },
        ]
    }

    handleChangeStatus = (id) => {
        const items = this.state.items.map(item => {
            if (item.id === id) item.active = !item.active;
            return item;
        });

        this.setState({ items: items });
    }

    render() {
        return (
            <React.Fragment>
                <Header items={this.state.items} />
                <ListItems items={this.state.items} changeStatus={this.handleChangeStatus} />
            </React.Fragment>
        );
    }
}

const root = document.querySelector("#root");
ReactDOM.render(<App />, root);