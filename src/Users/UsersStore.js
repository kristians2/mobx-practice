import { makeAutoObservable } from "mobx";

export default class UsersStore {
    users = [];
    currentPage = 1;
    editUser = null;

    constructor() {
        makeAutoObservable(this);
    }

    setUsers(users) {
        this.users = [...users];
    }

    setPage(page) {
        this.page = page;
    }

    removeUser(id) {
        this.users = this.users.filter((user) => user.id !== id);
    }

    editModalActive(id) {
        this.editUser = {...this.findUserById(id)};
    }

    findUserById(id) {
        return this.users.find((user) => user.id === id);
    }

    saveChangesUserId(id) {
        for (let i = 0; i < this.users.length; i++) {
            if (id === this.users[i].id) {
                this.users[i].email = this.editUser.email;
                this.users[i].first_name = this.editUser.first_name;
                this.users[i].last_name = this.editUser.last_name;

                return;
            }
        }
    }

    setEditedUserEmail(input) {
        this.editUser.email = input;
    }

    setEditedUserFirstName(input) {
        this.editUser.first_name = input;
    }

    setEditedUserLastName(input) {
        this.editUser.last_name = input;
    }

    closeEditModal() {
        this.editUser = null;
    }

    addUser(user) {
        this.users.push(user);
    }
}