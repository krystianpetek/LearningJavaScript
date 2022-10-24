import { IUser } from './IUser';
import "./UsersList.css"

interface IUsersListProps {
    users: Array<IUser> | null
}

const UsersList = (props: IUsersListProps): JSX.Element => {

    const users = (props.users?.map(user =>
        <li key={user.login.username}>
            <h5>{user.name.first} {user.name.last}</h5>
            <img src={user.picture.large} alt={user.picture.thumbnail} />
            <p>{user.email}</p>
        </li>
    ));

    return (
        <div className="users">
            {users}
        </div>
    );
}

export default UsersList;