import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import './App.css';
import MyContext from './Context/Context';
import Cards from './assets/Cards';
import Profile from './assets/Profile';
import VehicleCards from './assets/VehicleCards';

let peopleURL = "https://swapi.dev/api/people"
let imgBase = "https://starwars-visualguide.com/assets/img/characters";
let planetsURL = "https://swapi.dev/api/planets/"
let vehiclesURL = "https://swapi.dev/api/vehicles/"

function App() {
  const [data, setData] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  // Item 1 from readme
  async function fetchData() {
    try {
      let response = await axios.get(peopleURL);
      let people = response.data.results.map((element, i) => {
        let img = `${imgBase}/${i+1}.jpg`;
        let favorite = false;
        return {...element, img, favorite};
    });
    setData(people);
    console.log(people)
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
      setPlanets(planets)
      console.log(planets)
    } catch (err) {
      console.error(err)
    }
  };

  async function fetchVehicles() {
    try {
      let response = await axios.get(vehiclesURL);
      let vehicles = response.data.results.map((element) => {
        let favorite = false;
        return {...element, favorite};
    });
      setVehicles(vehicles);
      console.log(vehicles);
    } catch (err) {
      console.error(err)
    }
  };
  
  useEffect(() => {
    fetchData();
    fetchPlanets();
    fetchVehicles();
  }, [])

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

  let context = { data, setData, planets, vehicles }

  return (
    <>
      <MyContext.Provider value={context}>
        <div className="container">
          <div className="container horizontal-scrollable">
            <div className="row col-12">
              {data.map((element) => {
                return (
                  <Cards key={element.id}
                  character={element}
                  toggleFavorite={toggleFavorite}/>
                );
              })}
            </div>
            <div className="row col-12">
              {vehicles.map((element) => {
                return (
                  <VehicleCards key={element.id}
                  vehicle={element}
                  toggleFavorite={toggleVehicleFavorite}/>
                );
              })}
            </div>
          </div>
        </div>
      </MyContext.Provider>
    </>
  )
}

export default App
