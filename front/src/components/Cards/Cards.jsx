import Card from '../Card/Card.jsx';
import styles from './Cards.module.css';

export default function Cards(props) {
   const { characters, onClose } = props;

   return (<div className={styles.div}>
      {characters.map(char => <Card
      id={char.id}
      key={char.id}
      name={char.name}
      image={char.image}
      gender={char.gender}
      species={char.species}
      onClose={() => onClose(char.id)}
      />)}
   </div>) ;
}
