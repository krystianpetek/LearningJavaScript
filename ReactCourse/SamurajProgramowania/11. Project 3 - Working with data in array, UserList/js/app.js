const data = {
    users: [
        {
            id: 1,
            age: 29,
            name: "Arkadiusz",
            sex: "male"
        },
        {
            id: 2,
            age: 49,
            name: "Marta",
            sex: "female"
        },
        {
            id: 3,
            age: 19,
            name: "Zofia",
            sex: "female"
        },
        {
            id: 4,
            age: 24,
            name: "Karol",
            sex: "male"
        }
    ]
};

const Fruit = ({ content }) => (<li key={content}>{content}</li>)

const UserInfo = ({ user }) => (
    <div className="userInfo">
        <h2>{user.name}</h2>
        <p>Information about user</p>
        <p>User age: <strong>{user.age}</strong></p>
        <p>User gender: {user.sex}</p>
    </div>
)

class ListItems extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: ["apple", "pineapple", "pear", "plum"],
            users: props.data.users,
            filteredUsers: props.data.users
        }
    }

    handleGender = (props) => {
        if (!props) {
            this.setState({ filteredUsers: this.state.users })
            return;
        }

        this.setState({
            filteredUsers: this.state.users.filter(x => x.sex === `${props}`)
        })
    }

    render() {
        const { items } = this.state;
        let { filteredUsers } = this.state;

        return (
            <>
                <button onClick={this.handleGender.bind(this, null)}>Kobiety oraz mężczyźni</button>
                <button onClick={this.handleGender.bind(this, "female")}>Kobiety</button>
                <button onClick={this.handleGender.bind(this, "male")}>Meżczyźni</button>
                <ul>
                    {filteredUsers.map(item => <UserInfo key={item.id} user={item} />)}
                </ul>
                {/* <ul>
                    {items.map(item => <Fruit content={item} />)}
                </ul> */}
            </>
        )
    }
}

const root = document.querySelector("#root");
ReactDOM.render(
    <React.StrictMode>
        <ListItems data={data} />
    </React.StrictMode>, root);