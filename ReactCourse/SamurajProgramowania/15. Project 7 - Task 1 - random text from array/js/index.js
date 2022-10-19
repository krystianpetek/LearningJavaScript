class RandomText extends React.Component {
    state = {
        texts: ["first", "second", "third"],
        randomlyText: "",
        textToAdd: ""
    }

    handleRandom = () => {
        this.setState({
            randomlyText: this.state.texts[Math.floor(Math.random() * this.state.texts.length)]
        })
    }

    handleAddText = (props) => {
        const { texts: array, textToAdd } = this.state;
        if (textToAdd) {
            array.push(textToAdd);
            this.setState({
                texts: array,
                textToAdd: ""
            })
            alert(array);
        }
    }

    handleInput = (event) => {
        this.setState({
            textToAdd: event.target.value
        })
    }

    render() {
        return (
            <div className="app">
                <input
                    type="button"
                    name="Randomize"
                    value="Randomize"
                    onClick={this.handleRandom} />
                <br /><br />

                <input
                    type="text"
                    name="textToAdd" value={this.state.textToAdd}
                    onChange={this.handleInput} />

                <input
                    type="button"
                    name="AddText"
                    value="AddText"
                    onClick={this.handleAddText} />
                <br />
                <h2>{this.state.randomlyText}</h2>
            </div>
        )
    }
}

const rootDOM = document.querySelector("#root");
const root = ReactDOM.createRoot(rootDOM);
root.render(
    <React.StrictMode>
        <RandomText />
    </React.StrictMode>
);