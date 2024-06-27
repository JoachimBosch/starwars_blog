import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import MyContext from '../Context/Context';

function PersonCards(props) {


  return (
    <>
    <Card className="m-2 p-0" style={{ width: '18rem' }} key={props.id}>
        <div className="p-1 d-flex align-items-center">
            <Card.Img variant="top" src={props.img} style={{ height: "17rem", width: "17rem"}}/>
        </div>
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            <ul>
              <li>Gender: {props.point1}</li>
              <li>Hair color: {props.point2}</li>
              <li>Height: {props.point3}</li>
            </ul>
          </Card.Text>
          <div className="d-flex justify-content-between">
              <Button variant="primary">Learn more</Button>
              <Button variant="secondary" onClick=""><i className="fa-regular fa-heart"></i></Button>
          </div>
          
        </Card.Body>
    </Card>
    </>
  );
};

{/* <div className="container-fluid" >
            <div className="bg-dark row d-flex flex-row col-12 justify-content-center">
              <h2>Characters</h2>
              {persons.map((e) => {
                return (
                  <PersonCards name={e.name} point1={e.gender} point2={e.hair_color} point3={e.height} img={e.img} key={e.id}/>
                );
              })}
            </div>
            <br/>
          </div> */}

export default PersonCards;