class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messageIsActive: false
        };
        this.handleMessageButton = this.handleMessageButton.bind(this);
    };

    handleMessageButton = () => {
        this.setState((prevState) => ({
            messageIsActive: !prevState.messageIsActive
        }));
        // debugger
    };

    render() {
        const text = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, perferendis. Perspiciatis repellendus ipsam repellat ratione ab nobis earum, quisquam, recusandae accusantium numquam optio nostrum reiciendis doloribus soluta, itaque animi possimus! ";
        console.log(this.state.messageIsActive);
        return (
            <React.Fragment>
                <button onClick={this.handleMessageButton}>{this.state.messageIsActive ? "Hide" : "Show"}</button>
                <p>{this.state.messageIsActive && text}</p>
                {this.state.messageIsActive && <p>{text}</p>}
                {this.state.messageIsActive ? <p>{text}</p> : null}
            </React.Fragment>
        );
    }
}

const root = document.getElementById('root');
ReactDOM.render(<Message />, root);