class AppLifecycle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        };
        console.log("constructor method");
    }

    componentDidMount() {
        console.log("componentDidMount method");
        this.setState({
            number: 1
        })
    }

    componentDidUpdate() {
        console.log("componentDidUpdate method");
    }
    render() {
        console.log("render method")
        return (
            <React.Fragment>
                <Child />
                <p>lifecycle - component mount</p>
                <Button />
            </React.Fragment>
        )
    }
}

const rootDOM = document.querySelector("#root");
const rootReact = ReactDOM.createRoot(rootDOM);
rootReact.render(
    <React.StrictMode>
        <AppLifecycle />
    </React.StrictMode>
)

class Child extends React.Component {
    componentDidMount() {
        console.log("componentDidMount method in Child component");
        this.setState({
            number: 1
        })
    }
    componentDidUpdate() {
        console.log("componentDidUpdate method in Child component");
    }
    render() {
        console.log("render method in Child component")
        return (
            <h1>Child</h1>
        )
    }
}

class Button extends React.Component {
    state = {
        status: true
    }

    componentDidUpdate() {
        console.log("Button updated")
    }

    componentDidMount() {
        console.log("Button mounted")
    }

    render() {
        console.log("render method in Button component")
        return (
            <div>
                <button
                    onClick={() => this.setState({
                        status: !this.state.status
                    })}
                >Switch</button>
                <ButtonChild status={this.state.status} />
                {this.state.status && <ButtonChild2 />}
            </div>
        )
    }
}

class ButtonChild extends React.Component {

    componentDidUpdate() {
        console.log("Child Button updated")
    }

    componentDidMount() {
        console.log("Child Button mounted")
    }

    render() {
        console.log("render method in Child Button component")
        return (
            <div>
                {String(this.props.status)}
            </div>
        )
    }
}


class ButtonChild2 extends React.Component {

    componentDidUpdate() {
        console.log("Child 2 Button updated")
    }

    componentDidMount() {
        console.log("Child 2 Button mounted")
    }

    componentWillUnmount() {
        console.log("Child 2 Button will be unmounted")
    }

    render() {
        console.log("render method in Child Button 2 component")
        return (
            <div>
                Component Button Child 2 mounted
            </div>
        )
    }
}