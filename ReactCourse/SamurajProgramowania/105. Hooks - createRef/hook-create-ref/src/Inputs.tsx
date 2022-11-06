import React, { createRef, RefObject } from "react";

class Inputs extends React.Component {
    textInput: RefObject<HTMLInputElement> = createRef();
    render() {
        return (
            <div className="App">
                <input
                    type="text" />
                <input
                    type="number"
                    ref={this.textInput}
                />
                <button
                    onClick={this.focusTextInput}>
                    Set focus on input</button>
            </div>
        );
    }
    focusTextInput = () => this.textInput.current?.focus();
}

export default Inputs;