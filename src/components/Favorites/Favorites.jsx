import { connect } from "react-redux";
import style from './Favorites.module.css';

function Favorites({myFavorites}) {
    return (
        <div className={style.orden}>
            {myFavorites.map(fav => <div className={style.div}>
                <img src={fav.image} alt={fav.name} className={style.img}/>
                <h3 className={style.name}>{fav.name}</h3>
            </div>)}
        </div>
    )
}

function mapStateToProps(state) {
    return{
        myFavorites: state.myFavorites
    };
}

export default connect(mapStateToProps)(Favorites)