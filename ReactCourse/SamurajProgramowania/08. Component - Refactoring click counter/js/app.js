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
                <MathButton
                    name="-10"
                    number={10}
                    type={Type.Subtraction}
                    click={this.handleMathClick.bind(this)}
                />
                <MathButton
                    name="-1"
                    number={1}
                    type={Type.Subtraction}
                    click={this.handleMathClick.bind(this)}
                />
                <MathButton
                    name="reset"
                    number={1}
                    type={Type.Reset}
                    click={this.handleMathClick.bind(this)}
                />
                <MathButton
                    name="1"
                    number={1}
                    type={Type.Addition}
                    click={this.handleMathClick.bind(this)}
                />
                <MathButton
                    name="10"
                    number={10}
                    type={Type.Addition}
                    click={this.handleMathClick.bind(this)}
                />
                <ResultPanel count={this.state.count} result={this.state.result} />
            </>
        )
    }

}

const MathButton = (props) => {
    return (
        <button onClick={() => props.click(props.type, props.number)}>{props.name}</button>
    )
};

const ResultPanel = (props) => {
    return (
        <React.Fragment>
            <h1>Liczba kliknięć: {props.count} {props.count > 10 ? <span><br />Przeciążenie procesora!</span> : null}</h1>
            <h1>Wynik: {props.result}</h1>
        </React.Fragment>
    )
}

const Type = {
    Subtraction: "subtraction",
    Addition: "addition",
    Reset: "reset"
};

const root = document.getElementById('root');
ReactDOM.render(<Counter result={0} />, root);