const ValidationMessage = (props) => {
    const { txt } = props
    return (<p>{txt}</p>)
}

const DisplayMessage = (props) => {
    const { isConfirmed, isFormSubmitted } = props;
    if (isFormSubmitted) {
        if (isConfirmed) {
            return <ValidationMessage txt="You can watch this movie. Welcome!" />;
        }
        else {
            return <ValidationMessage txt="You can't watch this movie, if you don't have at least 16 years old!" />;
        }
    }
    else {
        return null;
    }
};

const OrderForm = (props) => {
    const { change, submit, checked } = props;
    return (
        <form onSubmit={submit}>
            <input
                id="age"
                type="checkbox"
                isConfirmed={checked}
                onChange={change}
            />
            <label htmlFor="age">I have at least 16 years ago</label>
            <br /><br />
            <button type="submit">Buy ticket</button>
        </form>)
}


class TicketShop extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isConfirmed: false,
            isFormSubmitted: false
        }
    }

    handleCheckboxChange = () => {
        this.setState({
            isFormSubmitted: false,
            isConfirmed: !this.state.isConfirmed
        });
    };

    handleFormSubmit = (e) => {
        e.preventDefault();
        if (!this.state.isFormSubmitted) {
            this.setState({
                isFormSubmitted: true
            });
        }
    };

    render() {
        const { isConfirmed, isFormSubmitted } = this.state;
        return (
            <>
                <h1>Buy ticket for horror movie!</h1>
                <OrderForm
                    change={this.handleCheckboxChange}
                    submit={this.handleFormSubmit}
                    checked={isConfirmed} />
                <DisplayMessage
                    isConfirmed={isConfirmed}
                    isFormSubmitted={isFormSubmitted} />
            </>
        );
    }
}

const root = document.querySelector('#root');
ReactDOM.render(
    <React.StrictMode>
        <TicketShop />
    </React.StrictMode>, root);