import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import './App.css';
import MyContext from './Context/Context';
import Cards from './assets/Cards';
import Navigation from './assets/Navbar';
import Profile from './assets/Profile';

let peopleURL = "https://swapi.dev/api/people"
let imgBase = "https://starwars-visualguide.com/assets/img/characters";
let planetsURL = "https://swapi.dev/api/planets/"
let vehiclesURL = "https://swapi.dev/api/vehicles/"

function App() {
  const [data, setData] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [favorite, setFavorite] = useState([])

  // Item 1 from readme
  async function fetchData() {
    try {
      let response = await axios.get(peopleURL);
      let people = response.data.results.map((element, i) => {
        let img = `${imgBase}/${i+1}.jpg`;
        return {...element, img};
    });
    setData(people);
    console.log(data)
    } catch (err) {
      console.error(err);
    }
  };

  async function fetchPlanets() {
    try {
      let response = await axios.get(planetsURL);
      setPlanets(response.data.results)
    } catch (err) {
      console.error(err)
    }
  };

  async function fetchVehicles() {
    try {
      let response = await axios.get(vehiclesURL);
      setVehicles(response.data.results)
    } catch (err) {
      console.error(err)
    }
  };
  
  useEffect(() => {
    fetchData();
    fetchPlanets();
    fetchVehicles();
  }, [])

  let context = { data, planets, vehicles }

  return (
    <>
      <MyContext.Provider value={context}>
        <div className="container">
            <Navigation />
          <div className="container horizontal-scrollable">
            <div className="row col-12">
              {data.map((e) => {
                return (
                  <Cards name={e.name} point1={e.gender} point2={e.hair_color} point3={e.height} img={e.img} key={e.id}/>
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
