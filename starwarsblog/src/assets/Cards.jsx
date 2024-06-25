import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards(props) {
  return (
    <Card className="m-2 p-0" style={{ width: '18rem' }} key={props.id}>
        <div className="p-1 d-flex align-items-center">
            <Card.Img variant="top" src={props.img} style={{ height: "17rem", width: "17rem"}}/>
        </div>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          <ul>
            <li>Gender: {props.point1}</li>
            <li>Hair color: {props.point2}</li>
            <li>Height: {props.point3}</li>
          </ul>
        </Card.Text>
        <div className="d-flex justify-content-between">
            <Button variant="primary">Learn more</Button>
            <Button variant="secondary"><i className="fa-regular fa-heart"></i></Button>
        </div>
        
      </Card.Body>
    </Card>
  );
}

export default Cards;