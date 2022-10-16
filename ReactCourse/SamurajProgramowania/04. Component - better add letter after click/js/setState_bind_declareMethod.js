// funkcja strzalkowa a deklarowanie metody. bind
// setState - przekazanie do metody obiektu i funkcji
// definiowanie state w konstruktorze
// nowy komponent dla wyświetlania terkstu
// losowanie liczby
// nazwa przycisku z obiektu props, ze zmiennej bezpośrednio lub z obiektu state

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: "a",
            number: 0,
            summary: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const letter = "a";
        const number = Math.floor(Math.random() * 10).toString();

        this.setState((prevState) => {
            return {
                text: prevState.text + letter,
                number: prevState.number + " " + number,
                summary: prevState.summary + parseInt(number)
            }
        })
    }

    render() {
        const btnName = "stworz liczbę";
        return (
            <React.Fragment>
                <button onClick={this.handleClick} >{this.props.btnTitle} - {btnName}</button>
                <PanelResultClass text={this.state.text} number={this.state.number} summary={this.state.summary}>children</PanelResultClass>
            </React.Fragment>
        )
    }
}

// class component
class PanelResultClass extends React.Component {

    render() {
        return (
            <>
                <h1>{this.props.text}: {this.props.children}</h1>
                <h3>{this.props.number}</h3>
                <h4>Summary: {this.props.summary}</h4>
            </>
        )
    }
}

// function component
const PanelResultFunction = (props) => {
    return (
        <>
            <h1>{props.text}: {props.children}</h1>
            <h3>{props.number}</h3>
            <h4>Summary: {props.summary}</h4>
        </>
    )
};

ReactDOM.render(<App btnTitle="dodajCyfrę" />, document.getElementById('root'));