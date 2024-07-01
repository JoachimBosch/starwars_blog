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
    <div className="bg-dark text-white">
    <div className="d-flex justify-content-center pt-3 pb-2">
        <h1>{character.name}</h1>
      </div>
      <div className="container d-flex flex-row">
        <div className="pe-3">
          <img src={character.img} alt="" style={{ height: "500px", width: "500px"}} />
        </div>
        <div className="">
          <ul style={{ listStyleType: "none", fontSize: "1.2rem", paddingLeft: 0 }}>
            <li><strong>Born in:</strong> {character.birth_year}</li>
            <li><strong>Hair color:</strong> {character.hair_color}</li>
            <li><strong>Eye color:</strong> {character.eye_color}</li>
            <li><strong>Height:</strong> {character.height}</li>
            <li><strong>Mass:</strong> {character.mass}</li>
          </ul>
        </div>
      </div>
    </div>
      
    </>
  );
}

export default Profile;