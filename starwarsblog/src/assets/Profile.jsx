import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import MyContext from '../Context/Context';

function Profile() {
  const { name } = useParams();
  const { data } = useContext(MyContext);

  const characterName = name.replaceAll("_", " ");
  const character = data.find((char) => char.name === characterName);

  if (!character) {
    return <div>Character not found</div>;
  }

  return (
    <>
      <div className="d-flex justify-content-center mt-3 mb-2">
        <h1>{character.name}</h1>
      </div>
      <div className="container d-flex flex-row">
        <div>
          <img src={character.img} alt="" style={{ height: "500px", width: "500px"}} />
        </div>
        <div>
          <ul style={{ listStyleType: "none" }}>
            <li>Born in: {character.birth_year}</li>
            <li>Hair color: {character.hair_color}</li>
            <li>Eye color: {character.eye_color}</li>
            <li>Height: {character.height}</li>
            <li>Mass: {character.mass}</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Profile;