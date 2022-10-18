const Item = (props) => {
    return (
        <li
            className={props.active ? "enabled" : "disabled"}
            onClick={props.changeStatus}>
            {props.name}
        </li>)
}