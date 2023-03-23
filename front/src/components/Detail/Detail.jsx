import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import style from './Detail.module.css';

export default function Detail() {
    const {detailId}= useParams();
   // const [character, setCharacter]= useState();
   const [character, setCharacter] = useState({
      name: "",
      status: "",
      specie: "",
      gender: "",
      origin: "",
      image: "",
    });
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
           .then((response) => response.json())
           .then((char) => {
              if (char.name) {
                // setCharacter(char);
                setCharacter({
                  name: char.name,
                  status: char.status,
                  specie: char.specie,
                  gender: char.specie,
                  origin: char.origin.name,
                  image: char.image,
                });
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           })
        //return setCharacter({});
        .catch((err) => {
         alert("No hay personajes con ese ID");
       });
     }, [detailId]);

     return (
        <div>
            {character ? (
                <div className={style.div}>
                  <h1 className={style.name}>{character.name}</h1>
                    <div>
                        <img className={style.img} src={character.image} alt={character.name}/>
                    </div>
                    <div className={style.detalle}>
                     <h5 className={style.h5}>ESTADO: {character.status}</h5>
                     <h5 className={style.h5}>ESPECIE: {character.species}</h5>
                     <h5 className={style.h5}>GENERO: {character.gender}</h5>
                     <h5 className={style.h5}>ORIGEN: {character.origin?.name}</h5>
                    </div>
                </div>
            ) : ("")}
            <button className={style.button} onClick={() => navigate('/home')}>Volver</button>
        </div>
     )
}