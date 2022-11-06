import React, { PureComponent } from "react";

class Counter extends PureComponent<{ init: number }> {
    state = {
        counter: this.props.init
    }

    render(): React.ReactNode {
        const { counter } = this.state;
        return (
            <div>
                <p>Counter value: {counter}</p>

                <button
                    onClick={this.asyncIncreaseCounterValue}>Download async data</button>
            </div>
        )
    }

    asyncIncreaseCounterValue = () => setTimeout(
        () => {
            this.setState((prevState: { counter: number }) => ({ counter: prevState.counter + 1 }))
        },
        3000
    )

}
export default Counter;