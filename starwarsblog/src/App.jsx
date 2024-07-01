import React, { useContext } from 'react';
import MyContext from './Context/Context';
import Cards from './assets/Cards';
import VehicleCards from './assets/VehicleCards';
import "./App.css"; 

function App() {
  const { data, toggleFavorite, vehicles, toggleVehicleFavorite } = useContext(MyContext);

  return (
    <div className="container-fluid bg-dark">
      <div className="">
        <div className="scrolling-wrapper">
          {data.map((character) => (
            <Cards key={character.url} character={character} toggleFavorite={toggleFavorite} />
          ))}
        </div>
        <div className="scrolling-wrapper">  
          {vehicles.map((vehicle) => (
            <VehicleCards key={vehicle.url} vehicle={vehicle} toggleVehicleFavorite={toggleVehicleFavorite} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;