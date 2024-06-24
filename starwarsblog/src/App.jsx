import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import Cards from './assets/Card'
let peopleURL = "https://swapi.dev/api/people"
let imgBase = "https://starwars-visualguide.com/assets/img/characters";

function App() {
  const [data, setData] = useState([])

  // Item 1 from readme

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await axios.get(peopleURL);
        let people = response.data.results.map((element, i) => {
          let img = `${imgBase}/${i+1}`;
          return {...element, img};
      });
      setData(people);
      console.log(data)
      } catch (err) {
        console.error(err);
      }
    };
    fetchData()
  }, [])

  return (
    <>
      {/* <div className="container">
        <ul>{data ? data.map((el, i) =>{
        return <li key={i}>{el.name}</li>;
      })
      : "no data"}
      </ul></div> */}
      <Cards />
    </>
  )
}

export default App
