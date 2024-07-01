import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const PlanetCards = ({ planet, togglePlanetFavorite }) => {
  return (
    <Card className="m-2 p-0 card text-bg-dark border border-warning" style={{ width: '18rem' }} key={planet.id}>
        <div className="p-1 d-flex align-items-center">
            <Card.Img src={planet.img} className="card-img-top" alt={planet.name} style={{ height: "17rem", width: "17rem"}}/>
        </div>
      <Card.Body>
        <Card.Title>{planet.name}</Card.Title>
        <Card.Text>
            <ul>
                <li>Rotation Period: {planet.rotation_period}</li>
                <li>Orbital Period: {planet.orbital_period}</li>
                <li>Diameter: {planet.diameter}</li>
            </ul>
        </Card.Text>
        <div className="d-flex justify-content-between">
            <Button as={Link} to={`/profile/planet/${planet.name.replaceAll(" ", "_")}`} variant="warning">Go to profile</Button>
            <Button onClick={() => togglePlanetFavorite(planet.name)} className="btn btn-dark btn-outline-dark">{planet.favorite === false ? <i className="fa-regular fa-heart" style={{ color: "#FFCA2B"}}></i>  : <i class="fa-solid fa-heart" style={{ color: "#FFCA2B"}}></i>}</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PlanetCards;