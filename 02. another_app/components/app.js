class App extends React.Component {
    state = {
        value: ""
    };

    handleChange = (e) => {
        let result = ("Zawartość w evencie: " + e.target.value + "\n"
            + "Zawartość value przed setState: " + this.state.value);
        this.setState({
            value: e.target.value
        });
        result += ("\nZawartość value po setState: " + this.state.value);
        console.log(result);
    };

    handleClick = () => {
        this.setState({
            value: ""
        });
    };

    render() {
        // render jest asynchroniczna, w chwili wywołania render zmienia sie stan
        console.log("Zawartość value w trakcie metody render: " + this.state.value);
        return (
            <React.Fragment>
                <input value={this.state.value} placeholder="wpisz tekst..." onChange={this.handleChange} type="text" />
                <button onClick={this.handleClick} >RESET</button>
                <h1 className="title">{this.state.value.toUpperCase()}</h1>
            </React.Fragment>
        )
    };
};

const root = document.getElementById('root');
ReactDOM.render(<App />, root);