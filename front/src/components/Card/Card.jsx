import style from './Card.module.css';
import { Link } from 'react-router-dom';
import { addFav, deleteFav } from '../../redux/actions.js';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

function Card(props) {
   const [isFav, setIsFav] = useState(false);

   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);

   const handleFavorite = () => {
      if(isFav) {
         setIsFav(false);
         props.deleteFav(props.id);
      } else {
         setIsFav(true);
         props.addFav(props)
      }
   }

  

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
         {
         isFav ? (
            <button onClick={handleFavorite} className={style.corazon}>❤️</button>
         ) : (<button onClick={handleFavorite} className={style.corazon}>🤍</button>)
         }
      </div>
   );
}
function mapDispatchToProps(dispatch) {
   return {
      addFav: (personaje) => dispatch(addFav(personaje)),
      deleteFav: (id) => dispatch(deleteFav(id))
   }
};

function mapStateToProps(state) {
   return {
      myFavorites: state.myFavorites
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(Card);