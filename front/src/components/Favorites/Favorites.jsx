import { connect, useDispatch } from "react-redux";
import style from './Favorites.module.css';
import { orderCards, filterCards } from '../../redux/actions.js';
import { useNavigate } from "react-router-dom";

function Favorites({myFavorites}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleSelectOrder = (e) => {
        dispatch(orderCards(e.target.value));
    }

    const handleSelectorFilter = (e) => {
        dispatch(filterCards(e.target.value));
    }

    return (
        <div>
            <div className={style.selectDiv}>
              <div>
              <label className={style.label} htmlFor="order">Orden:</label>
                <select className={style.select} name='order'  onChange={handleSelectOrder}>
                    <option value='Ascendente'>Ascendente</option>
                    <option value='Descendente'>Descendente</option>
                </select>
              </div>
            <div>
              <label className={style.label} htmlFor="filter">Filtrar por:</label>
                <select className={style.select} name='filter' onChange={handleSelectorFilter}>
                    <option value='All'>All</option>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                    <option value='Genderless'>Genderless</option>
                    <option value='unknown'>unknown</option>
                </select>
              </div>
              
            </div>
             <div className={style.orden}>
                {myFavorites.map(fav => <div className={style.div}>
                <img src={fav.image} alt={fav.name} className={style.img}/>
                <h3 className={style.name}>{fav.name}</h3>
                <h2>{fav.species}</h2>
                <h2>{fav.gender}</h2>
                <h2>{fav.status}</h2>
             </div>)}
            </div>
        <button className={style.button} onClick={() => navigate('/home')}>Volver</button>
        </div>
       
    )
}

function mapStateToProps(state) {
    return{
        myFavorites: state.myFavorites
    };
}

export default connect(mapStateToProps)(Favorites)