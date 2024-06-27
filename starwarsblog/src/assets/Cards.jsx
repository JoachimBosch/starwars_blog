import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Cards({ character, toggleFavorite }) {

  return (
    <Card className="m-2 p-0" style={{ width: '18rem' }} key={character.id}>
        <div className="p-1 d-flex align-items-center">
            <Card.Img variant="top" src={character.img} style={{ height: "17rem", width: "17rem"}}/>
        </div>
      <Card.Body>
        <Card.Title>{character.name}</Card.Title>
        <Card.Text>
          <ul>
            <li>Favorite: {character.favorite === false ? "No" : "Yes"}</li>
            <li>Hair color: {character.hair_color}</li>
            <li>Height: {character.height} cm</li>
          </ul>
        </Card.Text>
        <div className="d-flex justify-content-between">
            <Button as={Link} to={`/profile/${character.id}`} variant="primary">Go to profile</Button>
            <Button onClick={() => toggleFavorite(character.name)}><i className="fa-regular fa-heart"></i></Button> {/* Doesn't work yet */}
        </div>
        
      </Card.Body>
    </Card>
  );
}

export default Cards;