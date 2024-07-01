import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const MyContext = createContext();

let peopleURL = "https://swapi.dev/api/people";
let imgBase = "https://starwars-visualguide.com/assets/img/characters";
let planetsURL = "https://swapi.dev/api/planets/";
let vehiclesURL = "https://swapi.dev/api/vehicles/";
let vehicleImg = "https://starwars-visualguide.com/assets/img/vehicles";

export const MyProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  
  
  async function fetchData() {
    try {
      let response = await axios.get(peopleURL);
      let people = response.data.results.map((element, i) => {
        let img = `${imgBase}/${i+1}.jpg`;
        let favorite = false;
        return {...element, img, favorite};
      });
      setData(people);
      console.log(people);
    } catch (err) {
      console.error(err);
    }
  };

  async function fetchPlanets() {
    try {
      let response = await axios.get(planetsURL);
      let planets = response.data.results.map((element) => {
        let favorite = false;
        return {...element, favorite};
      });
      setPlanets(planets);
      console.log(planets);
    } catch (err) {
      console.error(err);
    }
  };

  async function fetchVehicles() {
    try {
      let response = await axios.get(vehiclesURL);
      let vehicles = response.data.results.map((element) => {
        let id = element.url.split('/').slice(-2, -1)[0];
        let img = `${vehicleImg}/${id}.jpg`;
        let favorite = false;
        return {...element, img, favorite};
      });
      setVehicles(vehicles);
      console.log(vehicles);
    } catch (err) {
      console.error(err);
    }
  };
  
  useEffect(() => {
    fetchData();
    fetchPlanets();
    fetchVehicles();
  }, []);
  
  let toggleFavorite = (id) => {
    setData(prevData =>
      prevData.map(element =>
        element.name === id
          ? { ...element, favorite: !element.favorite }
          : element
      )
    );
  };

  let toggleVehicleFavorite = (id) => {
    setVehicles(prevData =>
      prevData.map(element =>
        element.name === id
          ? { ...element, favorite: !element.favorite }
          : element
      )
    );
  };

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredPlanets = planets.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredVehicles = vehicles.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  let StarWarsContext = { data: filteredData, setData, planets: filteredPlanets, vehicles: filteredVehicles, toggleFavorite, toggleVehicleFavorite, fetchData, setSearchQuery };

  return (
    <MyContext.Provider value={StarWarsContext}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext