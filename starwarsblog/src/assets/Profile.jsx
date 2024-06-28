import { useParams } from "react-router-dom";
import { useContext } from "react";

function Profile({character}) {
    const { id } = useParams();
    const { data } = useContext(MyContext);

    return ( 
    <>
    <div className="d-flex justify-content-center mt-3 mb-2">
        <h1>{character.name}</h1>
    </div>
    <div className="container d-flex flex-row">
        <div>
            <img src={character.img} alt="" style={{ height: "500px", width: "500px"}} />
        </div>
        <div>
            <h2>Hello</h2>
            <ul style={{ listStyleType: "none"}}>
            <li>Born in: {character.birth_year}</li>
            <li>Hair color: {character.hair_color}</li>
            <li>Eye color: {character.eye_color}</li>
            <li>Height: {character.point3}</li>
            <li>Mass: {character.mass}</li>
            <li></li>

            </ul>
        </div>

    </div>
    </> 
    );
}

export default Profile;