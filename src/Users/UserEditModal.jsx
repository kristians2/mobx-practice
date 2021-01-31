import { observer } from "mobx-react-lite";
import { Modal, Button, Form } from "react-bootstrap";
import Fog from "./Fog"

const EditUserModal = observer(({usersStore}) => {
    if (usersStore.editUser === null) {
        return null;
    }


    return (
        <>
        <Fog />
        <Modal.Dialog style={{width: "24rem", position: "fixed", top: "50%", left: "50%", transform:"translate(-50%, -50%)"}}>
            <Modal.Header>
                <Modal.Title>Edit User</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email"
                        placeholder="Enter email"
                        onChange={(e) => usersStore.setEditedUserEmail(e.target.value)}
                        value={usersStore.editUser.email} />

                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control 
                        type="text"
                        placeholder="Enter first name"
                        onChange={(e) => usersStore.setEditedUserFirstName(e.target.value)}
                        value={usersStore.editUser.first_name} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter last name"
                        onChange={(e) => usersStore.setEditedUserLastName(e.target.value)}
                        value={usersStore.editUser.last_name} />
                </Form.Group>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={() => usersStore.closeEditModal()}>Close</Button>
                <Button variant="primary" onClick={() => usersStore.saveChangesUserId(usersStore.editUser.id)}>Save changes</Button>
            </Modal.Footer>
        </Modal.Dialog>
        </>
    )
});

export default EditUserModal;