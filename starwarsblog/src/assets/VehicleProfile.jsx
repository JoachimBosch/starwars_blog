import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import MyContext from '../Context/Context';

function VehicleProfile() {
  const { name } = useParams();
  const { vehicles } = useContext(MyContext);

  const vehicleName = name.replaceAll("_", " ");
  const vehicle = vehicles.find((veh) => veh.name === vehicleName);

  if (!vehicle) {
    return <div>Vehicle not found</div>;
  }

  return (
    <>
    <div className="bg-dark text-white">
    <div className="d-flex justify-content-center pt-3 pb-2">
        <h1>{vehicle.name}</h1>
      </div>
      <div className="container d-flex flex-row">
        <div className="pe-3">
          <img src={vehicle.img} alt={vehicle.name} style={{ height: "500px", width: "500px"}} />
        </div>
        <div>
          <ul style={{ listStyleType: "none", fontSize: "1.2rem", paddingLeft: 0 }}>
            <li><strong>Model:</strong> {vehicle.model}</li>
            <li><strong>Manufacturer:</strong> {vehicle.manufacturer}</li>
            <li><strong>Cost in Credits:</strong> {vehicle.cost_in_credits}</li>
            <li><strong>Length:</strong> {vehicle.length}</li>
            <li><strong>Max Speed:</strong> {vehicle.max_atmosphering_speed}</li>
            <li><strong>Crew:</strong> {vehicle.crew}</li>
            <li><strong>Passengers:</strong> {vehicle.passengers}</li>
            <li><strong>Cargo Capacity:</strong> {vehicle.cargo_capacity}</li>
            <li><strong>Consumables:</strong> {vehicle.consumables}</li>
            <li><strong>Vehicle Class:</strong> {vehicle.vehicle_class}</li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
}

export default VehicleProfile;