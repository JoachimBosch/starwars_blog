import React, { useContext } from 'react';
import MyContext from './Context/Context';
import Cards from './assets/Cards';
import VehicleCards from './assets/VehicleCards';
import PlanetCards from './assets/PlanetCards';
import "./App.css"; 

function App() {
  const { data, toggleFavorite, vehicles, toggleVehicleFavorite, planets, togglePlanetFavorite } = useContext(MyContext);

  return (
    <div className="container-fluid bg-dark pb-5">
      <div className="">
        {data.length === 0 ? "" : 
        <>
        <div className="text-white py-3 d-flex justify-content-center">
          <h2>Characters:</h2>
        </div>
        <div className="scrolling-wrapper">
          {data.map((character) => (
            <Cards key={character.url} character={character} toggleFavorite={toggleFavorite} />
          ))}
        </div>
        </>
        }
        {vehicles.length === 0 ? "" : 
        <>
        <div className="text-white py-3 d-flex justify-content-center">
          <h2>Vehicles:</h2>
        </div>
        <div className="scrolling-wrapper">  
          {vehicles.map((vehicle) => (
            <VehicleCards key={vehicle.url} vehicle={vehicle} toggleVehicleFavorite={toggleVehicleFavorite} />
          ))}
        </div>
        </>}
        {planets.length === 0 ? "" :
        <>
        <div className="text-white py-3 d-flex justify-content-center">
          <h2>Planets:</h2>
        </div>
        <div className="scrolling-wrapper">
          {planets.map((planet) => (
            <PlanetCards key={planet.url} planet={planet} togglePlanetFavorite={togglePlanetFavorite} />
          ))}
        </div>
        </>}
      </div>
    </div>
  );
}

export default App;