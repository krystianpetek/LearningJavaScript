class Clicker extends React.Component {
    state = {
        number1: 0,
        number2: 0,
        number3: 0,
        number4: 0
    }

    handleClick1 = () => {
        this.setState({
            number1: this.state.number1 + 1
        })

        // console.log(this.state.number1, "number1", "w metodzie handleClick1")
    }

    handleClick2 = () => {
        this.setState({
            number2: this.state.number2 + 1
        });

        this.setState({
            number2: this.state.number2 + 1
        });

        // console.log(this.state.number2, "number2", "w metodzie handleClick2")
    }

    handleClick3 = () => {
        this.setState(() => ({
            number3: this.state.number3 + 1
        }));

        this.setState(() => ({
            number3: this.state.number3 + 1
        }));

        // console.log(this.state.number3, "number3", "w metodzie handleClick3")
    }

    handleClick4 = () => {
        this.setState((prevState) => ({
            number4: prevState.number4 + 1
        }));

        this.setState((prevState) => ({
            number4: prevState.number4 + 1
        }));

        console.log(this.state.number4, "number4", "w metodzie handleClick4")
    }

    render() {
        // console.log(this.state.number2, "number2", "w render")
        // console.log(this.state.number3, "number3", "w render")
        console.log(this.state.number4, "number4", "w render")
        return (
            <React.Fragment>
                <div>
                    <p>number1: <b>{this.state.number1}</b></p>
                    <button
                        onClick={this.handleClick1}
                    >Pull up by 1</button>
                </div>
                <div>
                    <p>number2: <b>{this.state.number2}</b></p>
                    <button
                        onClick={this.handleClick2}
                    >Pull up by 3</button>
                </div>
                <div>
                    <p>number3: <b>{this.state.number3}</b></p>
                    <button
                        onClick={this.handleClick3}
                    >Pull up by 3</button>
                </div>
                <div>
                    <p>number3: <b>{this.state.number4}</b></p>
                    <button
                        onClick={this.handleClick4}
                    >Pull up by 3</button>
                </div>
            </React.Fragment>
        )
    }
}

const rootDOM = document.querySelector("#root");
const rootReact = ReactDOM.createRoot(rootDOM);
rootReact.render(
    <React.StrictMode>
        <Clicker />
    </React.StrictMode>
)