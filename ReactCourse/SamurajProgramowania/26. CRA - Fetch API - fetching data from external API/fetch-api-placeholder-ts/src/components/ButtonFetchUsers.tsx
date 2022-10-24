import "./ButtonFetchUsers.css"

interface IButtonFetchUsersProps {
    click: () => void;
    title: string
}

const ButtonFetchUsers = (props: IButtonFetchUsersProps) => {
    return (
        <button className="getUsers" onClick={props.click}>
            Add using {props.title}
        </button>
    );
}

export default ButtonFetchUsers;