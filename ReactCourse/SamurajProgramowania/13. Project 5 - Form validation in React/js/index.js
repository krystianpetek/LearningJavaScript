class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            city: "Świnna Poręba",
            aboutCity: "Please write some information about this city",
            isLovedCity: true,
            visitsNumber: 2
        }
    }

    handleChange = (event) => {
        if (event.target.type === "checkbox")
            this.setState({
                [event.target.name]: event.target.checked
            });
        else
            this.setState({
                [event.target.name]: event.target.value
            });
    }

    render() {
        return (
            <div>
                <label htmlFor="city">Enter the city:</label>
                <input
                    id="city"
                    name="city"
                    type="text"
                    value={this.state.city}
                    onChange={this.handleChange.bind(this)}
                ></input>
                <br />
                <label htmlFor="aboutCity"></label>
                <textarea
                    id="aboutCity"
                    name="aboutCity"
                    type="text"
                    value={this.state.aboutCity}
                    onChange={this.handleChange.bind(this)}
                ></textarea>
                <br />
                <label htmlFor="isLovedCity">You love this city?</label>
                <input
                    id="isLovedCity"
                    name="isLovedCity"
                    type="checkbox"
                    checked={this.state.isLovedCity}
                    onChange={this.handleChange.bind(this)}
                ></input>
                <br />
                <label htmlFor="beeing">How many times are you beeing in this city?</label>
                <select
                    id="visitsNumber"
                    name="visitsNumber"
                    value={this.state.visitsNumber}
                    onChange={this.handleChange.bind(this)}
                >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="more">more</option>
                </select>
            </div>
        );
    }
}

const documentRoot = document.querySelector("#root");
const root = ReactDOM.createRoot(documentRoot);
root.render(
    <React.StrictMode>
        <Form />
    </React.StrictMode>
);
