import { useState, useEffect } from  'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import './App.css'
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form.jsx';




function App () {

  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  
  const [access, setAccess] = useState(false)
  let username = 'mvirginiamontoya@yahoo.com.ar';
  let password = 'Password1';

  useEffect(() => {
    !access && navigate('/');
 }, [access]);

  const login = (userData) => {
    if(userData.username === username && userData.password === password) {
      setAccess(true);
      navigate('/home');
    }
  }

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
  }
  
  const onClose= (id)=> {
    setCharacters(characters.filter(char => char.id !== id))
  }

  return (   
      <div className='App' style={{ padding: '25px' }}>
      {location.pathname === '/' ? null :
        <div>
        <Nav onSearch={onSearch}/>
        </div>
      }
      <div>
        <Routes>
          <Route path='/' element={<Form login={login}/>}/>
          <Route path='/about' element={<About />}/>
          <Route path='/home' element={<Cards characters={characters} onClose ={onClose}/>}/>
          <Route path='/detail/:detailId' element={<Detail />}/>  
        </Routes> 
    </div>
      
      </div>

  )
}

export default App
