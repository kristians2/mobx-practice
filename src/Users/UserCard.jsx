import {Card, Button} from "react-bootstrap";

export default function UserCard({firstName, lastName, email, avatar, onDeleteClick, onEditClick}) {
    return (
        <Card style={{ width: '18rem', margin: "10px" }}>
        <Card.Img variant="top" src={avatar} />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
                <div>
                    <span>{firstName}</span> <span>{lastName}</span>
                </div>
                <div>
                    {email}
                </div>
            </Card.Text>
            <Button style={{marginRight: ".5em"}}variant="primary" onClick={() => onEditClick()}>Edit</Button>
            <Button variant="danger" onClick={() => onDeleteClick()}>Remove</Button>
        </Card.Body>
        </Card>
    )
}