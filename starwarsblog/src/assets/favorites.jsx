import React, { useContext } from 'react';
import MyContext from '../Context/Context';
import { Dropdown, Button } from 'react-bootstrap';

const FavoritesDropdown = () => {
  const { data, vehicles, toggleFavorite, toggleVehicleFavorite } = useContext(MyContext);

  const favorites = [
    ...data.filter(person => person.favorite),
    ...vehicles.filter(vehicle => vehicle.favorite)
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
        Favorites
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {favorites.length === 0 ? (
          <Dropdown.Item>Choose one, you must</Dropdown.Item>
        ) : (
          favorites.map(favorite => (
            <div className="d-flex flex-row justify-content-between">
              <Dropdown.Item key={favorite.name}>
              {favorite.name}
              <button
                onClick={() => handleRemoveFavorite(favorite)}
                style={{ marginLeft: '10px', cursor: 'pointer' }}
                className="btn btn-dark btn-outline-dark"
              ><i class="fa-thin fa-trash-can"></i></button>
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