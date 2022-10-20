class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listOfPeople: [
                {
                    id: 1,
                    name: "Patrycja P."
                }, {
                    id: 22,
                    name: "Krystian P."
                }, {
                    id: 3,
                    name: "Józef P."
                }, {
                    id: 4,
                    name: "Teresa P."
                }, {
                    id: 5,
                    name: "Wojciech W."
                }
            ]
        }
    }

    handleDeletePerson = (props) => {
        const people = this.state.listOfPeople.filter(people => people.id != props.id);
        this.setState({
            listOfPeople: people
        })
    }

    render() {
        return (
            <div>
                <Person
                    people={this.state.listOfPeople}
                    delete={this.handleDeletePerson} />
            </div>
        )
    }
}

class Person extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const people = this.props.people.map(person =>
            <li
                key={person.id}>{person.name}
                <input
                    type="button"
                    value="Delete"
                    onClick={this.props.delete.bind(this, person)} />
            </li>
        );
        return (
            <ul>
                {people}
            </ul>
        )
    }
}

const rootDOM = document.querySelector("#root");
const rootReact = ReactDOM.createRoot(rootDOM);
rootReact.render(
    <React.StrictMode>
        <List></List>
    </React.StrictMode>
)