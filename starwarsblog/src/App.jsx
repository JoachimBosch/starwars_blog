import React, { useContext } from 'react';
import MyContext from './Context/Context';
import Cards from './assets/Cards';
import VehicleCards from './assets/VehicleCards';

function App() {
  const { data, toggleFavorite, vehicles, toggleVehicleFavorite } = useContext(MyContext);

  return (
    <div className="container">
      <div className="container horizontal-scrollable">
        <div className="row col-12">
          {data.map((character) => (
            <Cards key={character.id} character={character} toggleFavorite={toggleFavorite} />
          ))}
        </div>
        <div className="row col-12">
          {vehicles.map((vehicle) => (
            <VehicleCards key={vehicle.id} vehicle={vehicle} toggleVehicleFavorite={toggleVehicleFavorite} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;