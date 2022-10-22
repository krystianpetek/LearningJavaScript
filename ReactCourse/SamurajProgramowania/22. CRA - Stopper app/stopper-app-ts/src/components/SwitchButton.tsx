import "./SwitchButton.css";

interface ISwitchButtonProps {
    active: boolean;
    click: () => void;
}

export const SwitchButton = (props: ISwitchButtonProps): JSX.Element => {
    return <button onClick={props.click}>{props.active ? "Stop" : "Start"}</button>
}

export default SwitchButton;