// funkcja strzalkowa a deklarowanie metody. bind
// setState - przekazanie do metody obiektu i funkcji
// definiowanie state w konstruktorze

class AddSign extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            number: 2
        };
        this.handleClick = this.handleClick.bind(this);
    };

    handleClick() {
        const letter = "a";

        this.setState((prevState) => {
            return {
                text: prevState.text + letter
            } // best solution
        });
    }

    render() {
        return (
            <>
                <button onClick={this.handleClick/*.bind(this)*/} >Dodaj 'A'</button>
                <h1>{this.state.text}</h1>
            </>
        )
    }
};

ReactDOM.render(<AddSign />, document.getElementById('root'));
