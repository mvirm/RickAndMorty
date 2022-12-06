import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar.jsx';
import style from './Nav.module.css';



export default function Nav(props) {
    return (
      <nav className={style.nav}>
        <NavLink to='/about' className={({isActive}) => (isActive ? style.isActive : style.link)}>About</NavLink>
        <NavLink to='/favorites' className={({isActive}) => (isActive ? style.isActive : style.link)}>Favorites</NavLink>
        <NavLink to='/home' className={({isActive}) => (isActive ? style.isActive : style.link)}>Home</NavLink>
        <SearchBar onSearch={props.onSearch}/>  
      </nav>
    )
  }

