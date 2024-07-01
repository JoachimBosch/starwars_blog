import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function VehicleCards({ vehicle, toggleVehicleFavorite }) {

  return (
    <Card className="m-2 p-0 card text-bg-dark border border-warning" style={{ width: '18rem' }} key={vehicle.id}>
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
        <Button as={Link} to={`/profile/vehicle/${vehicle.name.replaceAll(" ", "_")}`} variant="warning">Go to profile</Button>
            <Button onClick={() => toggleVehicleFavorite(vehicle.name)} className="btn btn-dark btn-outline-dark">{vehicle.favorite === false ? <i className="fa-regular fa-heart" style={{ color: "#FFCA2B"}}></i>  : <i class="fa-solid fa-heart" style={{ color: "#FFCA2B"}}></i>}</Button>
        </div>
        
      </Card.Body>
    </Card>
  );
}

export default VehicleCards;