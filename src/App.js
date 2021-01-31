import './App.css';
import React from "react"
import UserListView from "./Users/UserList";
import UsersStore from './Users/UsersStore';
import EditUserModal from "./Users/UserEditModal";
import { Container, Row } from "react-bootstrap";

const usersStore = new UsersStore();

function App() {
    return (
        <div className="App">
            <Container>
                <Row className="justify-content-md-center">
                    <UserListView usersStore={usersStore} />
                    <EditUserModal usersStore={usersStore}/>
                </Row>
            </Container>
        </div>
  );
}

export default App;
