import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import MyContext from '../Context/Context';

function PlanetProfile() {
  const { name } = useParams();
  const { planets } = useContext(MyContext);

  const planetName = name.replaceAll("_", " ");
  const planet = planets.find((p) => p.name === planetName);

  if (!planet) {
    return <div>Planet not found</div>;
  }

  return (
    <>
      <div className="d-flex justify-content-center mt-3 mb-2">
        <h1>{planet.name}</h1>
      </div>
      <div className="container d-flex flex-row">
        <div className="me-3">
          <img src={planet.img} alt={planet.name} style={{ height: "500px", width: "500px"}} />
        </div>
        <div>
          <ul style={{ listStyleType: "none", fontSize: "1.2rem", paddingLeft: 0 }}>
            <li><strong>Rotation Period:</strong> {planet.rotation_period}</li>
            <li><strong>Orbital Period:</strong> {planet.orbital_period}</li>
            <li><strong>Diameter:</strong> {planet.diameter}</li>
            <li><strong>Climate:</strong> {planet.climate}</li>
            <li><strong>Gravity:</strong> {planet.gravity}</li>
            <li><strong>Terrain:</strong> {planet.terrain}</li>
            <li><strong>Surface Water:</strong> {planet.surface_water}</li>
            <li><strong>Population:</strong> {planet.population}</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default PlanetProfile;