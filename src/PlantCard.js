import { Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
export default function PlantCard(props) {
    const history = useHistory();

    return (
        <Card style={{ width: '18rem' }} key={props.name}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
                <Button variant="primary" onClick={() => history.push('/plant-details')}>Manage</Button>
            </Card.Body>
        </Card>

    )
}