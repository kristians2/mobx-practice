import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import UserCard from "./UserCard";

function getUsers(page) {
    return fetch(`https://reqres.in/api/users?page=${page}`)
        .then((response) => response.json());
}

const UserListView = observer(({usersStore}) => {
    useEffect(() => {
        getUsers(1)
            .then(({data}) => {
                usersStore.setUsers(data);
            });
    }, []);

    const userList = usersStore.users.map((user) => {
        return <UserCard
                key={user.id}
                firstName={user.first_name} 
                lastName={user.last_name} 
                email={user.email} 
                avatar={user.avatar} 
                onDeleteClick={() => usersStore.removeUser(user.id)}
                onEditClick={() => usersStore.editModalActive(user.id)} />
    });

    return (
        <>
            {userList}
        </>
    )
});

export default UserListView;