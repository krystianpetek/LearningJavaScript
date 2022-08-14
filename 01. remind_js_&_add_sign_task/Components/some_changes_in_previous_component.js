// nowy komponent dla wyświetlania terkstu
// losowanie liczby
// nazwa przycisku z obiektu props, ze zmiennej bezpośrednio lub z obiektu state

class App extends React.Component {

    state = {
        text: "a",
        number: 0
    };

    handleClick = () => {
        const letter = "a";
        const number = Math.floor(Math.random() * 10);

        this.setState({
            text: this.state.text + letter,
            number: this.state.number + '' + number
        });
    }

    render() {
        const btnName = "stworz liczbę";
        return (
            <React.Fragment>
                <button onClick={this.handleClick} >{this.props.btnTitle} - {btnName}</button>
                <PanelResult text={this.state.text} number = {this.state.number}>children</PanelResult>
            </React.Fragment>
        )
    }
};

const PanelResult = (props) => {
    return (
        <>
            <h1>{props.text}: {props.children}</h1>
            <h3>{props.number}</h3>
        </>
    )
};

ReactDOM.render(<App btnTitle = "dodajCyfrę"/>, document.getElementById('root'));
