class Counter extends React.Component {
    state = {
        result: 1,
        ratio: 2
    }

    handleMultiplication = () => {
        this.setState((state) => ({
            result: state.result * state.ratio
        }));
    }

    componentDidUpdate() {
        if (this.state.result > 1000 && this.state.ratio === 2)
            this.setState({
                ratio: 0.5
            })
        else if (this.state.result <= 1 && this.state.ratio === 0.5) {
            this.setState({
                ratio: 2
            })
        }
    }

    render() {
        return (
            <div>
                <p>
                    When number is below 1000, calculator multiplication ratio will be * 2, but when value reach 1000, multiplication ratio will be decreased to 0.5
                </p>
                <button
                    onClick={this.handleMultiplication}
                >Multiplication by {this.state.ratio}
                </button>
                <h1>
                    Result: {this.state.result}
                </h1>
            </div>
        )
    }
}

const rootDOM = document.querySelector("#root");
const rootReact = ReactDOM.createRoot(rootDOM);
rootReact.render(
    <React.StrictMode>
        <Counter />
    </React.StrictMode>
)