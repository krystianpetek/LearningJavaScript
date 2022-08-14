class App extends React.Component {
    state = {
        value: ""
    };

    handleChangeText = (e) => {
        this.setState({
            value: e.target.value
        });
    };

    handleResetText = () => {
        this.setState({
            value: ""
        });
    };

    render() {
        return (
            <React.Fragment>
                <input value={this.state.value} placeholder="wpisz tekst..." onChange={this.handleChangeText} type="text" />
                <button onClick={this.handleResetText} >RESET</button>
                <h1 className="title">{this.state.value.toUpperCase()}</h1>
            </React.Fragment>
        )
    };
};

const root = document.getElementById('root');
ReactDOM.render(<App />, root);