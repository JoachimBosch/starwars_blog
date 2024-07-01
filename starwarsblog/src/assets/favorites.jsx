import React, { useContext } from 'react';
import MyContext from '../Context/Context';
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const FavoritesDropdown = () => {
  const { data, vehicles, toggleFavorite, toggleVehicleFavorite, planets } = useContext(MyContext);

  const favorites = [
    ...data.filter(person => person.favorite),
    ...vehicles.filter(vehicle => vehicle.favorite),
    ...planets.filter(planet => planet.favorite),
  ];

  const handleRemoveFavorite = (favorite) => {
    if (favorite.url.includes('people')) {
      toggleFavorite(favorite.name);
    } else {
      toggleVehicleFavorite(favorite.name);
    }
  };

  return (
    <>
    <div className="d-flex justify-content-between">
    <Dropdown>
      <Dropdown.Toggle variant="warning" id="dropdown-basic">
        Favorites {favorites.length === 0 ? "" : `( ${favorites.length} )`} 
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {favorites.length === 0 ? (
          <Dropdown.Item>Choose one, you must</Dropdown.Item>
        ) : (
          favorites.map(favorite => (
            <div className="d-flex flex-row justify-content-between">
              <Dropdown.Item key={favorite.name}>
              {favorite.name}
                <span className="float-end" onClick={() => handleRemoveFavorite(favorite)}>
                    <FontAwesomeIcon icon={faTrash} />
                </span>
            </Dropdown.Item>
            </div>
          ))
        )}
      </Dropdown.Menu>
    </Dropdown>
    </div>
    </>
    
  );
};

export default FavoritesDropdown;