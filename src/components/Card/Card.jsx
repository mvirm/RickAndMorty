import style from './Card.module.css';
import { Link } from 'react-router-dom';

export default function Card(props) {
   return (
      <div className={style.div}>
         <button className={style.button}onClick={props.onClose}>X</button>
         <Link className={style.link}to={`/detail/${props.id}`}>
            <h2 className={style.name}>{props.name}</h2>
         </Link>
        <h6 className={style.noVer}>{props.id}</h6>
         <img  className={style.img}src={props.image} alt={props.name} /> 
         <div className={style.divH2}>
         <h2 className={style.h2}>{props.species}</h2>
         <h2 className={style.h2}>{props.gender}</h2>
         </div>
         
      </div>
   );
}
