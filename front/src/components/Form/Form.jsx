import { useState } from "react";
import validation from "./validation.js";
import style from './Form.module.css';


export default function Form(props) {
    const [userData, setUserData] = useState({
        username: '',
        password: ''
    })
    
    const [errors, setErrors] = useState({
        username: '',
        password: ''
    })

    const handleInputChange = (e) => {
        setUserData({...userData, [e.target.name]: e.target.value});
        setErrors(validation({...userData, [e.target.name]: e.target.value}));
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.login(userData);
        if(Object.keys(errors).length === 0) {
            setUserData({
                username: '',
                password: ''
            })
            setErrors({
                username: '',
                password: ''
            })
        } else {
            alert('usuario y/o contraseña incorrecta')
        }
    }
    return(
        <div className={style.display}>
            <img src="https://e1.pxfuel.com/desktop-wallpaper/80/926/desktop-wallpaper-rick-and-morty-logo-png-for-computer-supreme-rick-and-morty.jpg" alt='Bienvenido a Rick and Morty App'/>
            <div className={style.div}>
            <h4>ingresa tu usuario y contraseña</h4>
            <div className={style.form}>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username">username:</label>
                        <input className={style.input} id='username'name='username' type="text" value={userData.username} onChange={handleInputChange}/>
                        {errors.username ? <p className={style.vDanger}>{errors.username}</p> : null}
                    </div>
                    <div>
                        <label htmlFor="password">password:</label>
                        <input className={style.input} id='password' name='password' type="password" value={userData.password} onChange={handleInputChange}/>
                        {errors.password ? <p className={style.vDanger}>{errors.password}</p> : null}    
                    </div>
                    <button className={style.button} type="submit">Login</button>
                </form>  
            </div>
            </div>
        </div>
    )
}