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
        <div className={style.div}>
            <h1>Bienvenido a la Rick & Morty App</h1>
            <h4>Por favor, ingresa tu usuario y contraseña</h4>
            <form className={style.form} onSubmit={handleSubmit}>
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
    )
}