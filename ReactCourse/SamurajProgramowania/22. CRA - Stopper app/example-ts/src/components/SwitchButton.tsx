import "./SwitchButton.css";

interface SwitchButtonProps {
    active: boolean;
    click: () => void;
}

export const SwitchButton = (props: SwitchButtonProps): JSX.Element => {
    return <button onClick={props.click}>{props.active ? "Stop" : "Start"}</button>
}

export default SwitchButton;