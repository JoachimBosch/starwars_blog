import React, { useContext } from 'react';
import MyContext from '../Context/Context';
import { Dropdown } from 'react-bootstrap';

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
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Favorites
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {favorites.length === 0 ? (
          <Dropdown.Item>No favorites</Dropdown.Item>
        ) : (
          favorites.map(favorite => (
            <Dropdown.Item key={favorite.name}>
              {favorite.name}
              <Button
                onClick={() => handleRemoveFavorite(favorite)}
                style={{ marginLeft: '10px', cursor: 'pointer' }}
              ><i class="fa-thin fa-trash-can"></i></Button>
            </Dropdown.Item>
          ))
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default FavoritesDropdown;