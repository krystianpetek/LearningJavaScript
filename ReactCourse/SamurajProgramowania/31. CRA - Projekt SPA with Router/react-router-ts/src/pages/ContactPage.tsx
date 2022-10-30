import React from "react";
import "../styles/ContactPage.css"

class ContactPage extends React.Component {
    state = {
        value: "",
        isEmpty: true
    }

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.setState({
            value: "",
            isEmpty: true
        });
    }

    handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget.value.length > 0)
            this.setState({
                value: e.currentTarget.value,
                isEmpty: false
            })
        else {
            this.setState({
                isEmpty: false
            })
        }
    }

    render() {
        return (
            <div className="contact">
                <form onSubmit={this.handleSubmit}>
                    <h3>Send message to us!</h3>
                    <textarea
                        value={this.state.value}
                        onChange={this.handleChange}
                        placeholder="Type your message..." />
                    <button>Send!</button>
                </form>
                {/* {(!this.state.isEmpty) ? window.prompt("Are you want exit from form?") : ""} */}
            </div>
        );
    }
}

export default ContactPage;