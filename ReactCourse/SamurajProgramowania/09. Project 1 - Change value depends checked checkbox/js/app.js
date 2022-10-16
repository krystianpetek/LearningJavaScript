const PositiveMessage = () => <p>You can watch this movie. Welcome!</p>
const NegativeMessage = () => <p>You can't watch this movie, if you don't have at least 16 years old!</p>

class TicketShop extends React.Component {
    state = {
        isConfirmed: false,
        isFormSubmitted: false
    };

    handleCheckboxChange = () => {
        this.setState({
            isFormSubmitted: false,
            isConfirmed: !this.state.isConfirmed
        });
    };

    displayMessage = () => {
        if (this.state.isFormSubmitted) {
            if (this.state.isConfirmed) {
                return <PositiveMessage />;
            }
            else {
                return <NegativeMessage />;
            }
        }
        else {
            return null;
        }
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
        return (
            <>
                <h1>Buy ticket for horror movie!</h1>
                <form onSubmit={this.handleFormSubmit}>
                    <input
                        id="age"
                        type="checkbox"
                        isConfirmed={this.state.isConfirmed}
                        onChange={this.handleCheckboxChange}
                    />
                    <label htmlFor="age">I have at least 16 years ago</label>
                    <br /><br />
                    <button type="submit">Buy ticket</button>
                </form>
                {this.displayMessage()}
            </>
        );
    }
}

const root = document.querySelector('#root');
ReactDOM.render(
    <React.StrictMode>
        <TicketShop />
    </React.StrictMode>, root);