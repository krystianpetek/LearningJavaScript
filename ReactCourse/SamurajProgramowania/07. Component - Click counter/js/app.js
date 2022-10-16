class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            result: this.props.result
        }
    }

    handleMathClick(type = "reset", number = 1) {
        if (type === "subtraction") {
            this.setState((prevState) => ({
                count: prevState.count + 1,
                result: prevState.result - number
            }))
        }
        else if (type === "addition") {
            this.setState((prevState) => ({
                count: prevState.count + 1,
                result: prevState.result + number
            }))
        }
        else {
            this.setState((prevState) => ({
                result: this.props.result,
                count: prevState.count + 1
            }));
        }
    }

    render() {
        return (
            <>
                <button onClick={this.handleMathClick.bind(this, "subtraction", 10)}>-10</button>
                <button onClick={this.handleMathClick.bind(this, "subtraction", 1)}>-1</button>
                <button onClick={() => this.handleMathClick()}>RESET</button>
                <button onClick={() => this.handleMathClick("addition")}>+1</button>
                <button onClick={this.handleMathClick.bind(this, "addition", 10)}>+10</button>
                <h1>Liczba kliknięć: {this.state.count}</h1>
                <h1>Wynik: {this.state.result}</h1>
            </>
        )
    }
}

const root = document.getElementById('root');
ReactDOM.render(<Counter result={10} />, root);