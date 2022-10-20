class App extends React.Component {
    state = { active: true }

    handleClick = (state) => {
        this.setState(state => ({
            active: !state.active
        }));
    }

    render() {
        return (
            <div>
                <SwitchButton active={this.state.active} click={this.handleClick} />
                {this.state.active && <Clock />}
            </div>
        )
    }
}

const SwitchButton = props => {
    return (<button onClick={props.click}>{props.active ? "Turn off" : "Turn on"}</button>)
};

class Clock extends React.Component {
    interval = "";
    state = {
        time: this.getTime()
    };

    getTime() {
        const currentTime = new Date();
        return ({
            hours: currentTime.getHours(),
            minutes: currentTime.getMinutes(),
            seconds: currentTime.getSeconds()

        })
    }

    setTime = () => {
        const time = this.getTime();
        this.setState({ time })
    }

    componentDidMount() {
        console.log('Mount timer');
        this.interval = setInterval(this.setTime, 1000);
    }

    componentWillUnmount() {
        console.log("Unmount timer");
        clearInterval(this.interval);
    }

    render() {
        const { hours, minutes, seconds } = this.state.time;
        return (
            <div>
                {hours < 10 ? `0${hours}` : hours} : {minutes < 10 ? `0${minutes}` : minutes} : {seconds < 10 ? `0${seconds}` : seconds}
            </div>
        )
    }
}

const rootDOM = document.querySelector("#root");
const rootReact = ReactDOM.createRoot(rootDOM);
rootReact.render(
    <React.StrictMode>
        <App />
    </React.StrictMode >
)

