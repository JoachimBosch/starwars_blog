import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards({ character, toggleFavorite }) {
  return (
    <Card className="m-2 p-0 card text-bg-dark border border-warning" style={{ width: '18rem' }} key={character.id}>
      <div className="p-1 d-flex align-items-center">
        <Card.Img variant="top" src={character.img} style={{ height: "17rem", width: "17rem"}} />
      </div>
      <Card.Body>
        <Card.Title>{character.name}</Card.Title>
        <Card.Text>
          <ul>
            <li>Eye color: {character.eye_color}</li>
            <li>Hair color: {character.hair_color}</li>
            <li>Height: {character.height} cm</li>
          </ul>
        </Card.Text>
        <div className="d-flex justify-content-between">
          <Button as={Link} to={`/profile/${character.name.replaceAll(" ", "_")}`} variant="warning">Go to profile</Button>
          <Button onClick={() => toggleFavorite(character.name)} className="btn btn-dark btn-outline-dark">{character.favorite === false ? <i className="fa-regular fa-heart" style={{ color: "#FFCA2B"}}></i>  : <i class="fa-solid fa-heart" style={{ color: "#FFCA2B"}}></i>}</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Cards;