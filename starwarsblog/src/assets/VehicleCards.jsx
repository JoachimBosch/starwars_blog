
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function VehicleCards({ vehicle, toggleFavorite }) {

  return (
    <Card className="m-2 p-0" style={{ width: '18rem' }} key={vehicle.id}>
        <div className="p-1 d-flex align-items-center">
            <Card.Img variant="top" src={vehicle.img} style={{ height: "17rem", width: "17rem"}}/>
        </div>
      <Card.Body>
        <Card.Title>{vehicle.name}</Card.Title>
        <Card.Text>
          <ul>
            <li>Favorite: {vehicle.favorite === false ? "No" : "Yes"}</li>
            <li>Model: {vehicle.model}</li>
            <li>Length: {vehicle.length} m</li>
            <li>Max Speed: {vehicle.max_atmosphering_speed} km/h</li>
            <li>Crew: {vehicle.crew}</li>
            <li>Passengers: {vehicle.passengers}</li>
            <li>Cargo Capacity: {vehicle.cargo_capacity} kg</li>
          </ul>
        </Card.Text>
        <div className="d-flex justify-content-between">
            <Button onClick="">Go to profile</Button>
            <Button onClick={() => toggleFavorite(vehicle.name)}><i className="fa-regular fa-heart"></i></Button> {/* Doesn't work yet */}
        </div>
        
      </Card.Body>
    </Card>
  );
}

export default VehicleCards;