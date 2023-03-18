import React from 'react';
import style from './About.module.css';

export default function About() {
    return (
        <div className={style.about}>
            <h1>About Me...</h1>
            <div className={style.div}>
            <img className={style.img}src='https://media-exp1.licdn.com/dms/image/C4E03AQGWRehGh4o3bA/profile-displayphoto-shrink_200_200/0/1531372880058?e=1675900800&v=beta&t=qsDbSTAGV1z36SBa-6oF0yXss6dSQh5chPqHvufvvds'/>
            
            <p className={style.p}>Responsable, capaz, dinámica, autodidacta y proactiva; amante del color y buen manejo de la estetica.<br/>
            Con 20 años de experiencia en el área técnica del Diseño de Indumentaria...y mas de 10 años de docencia..., la vida dió un giro que hizo cambiar mis espectativas con respecto a mi carrera profesional; busque algo que me representara un desafio, y sin absolutamente ningún tipo de conocimiento, me adrente en el mundo IT.
            Hoy, puedo decir que soy una apasionada de los desafios logicos... y los tintes de color... que el Desarrollo Web me deparan!</p>
            </div>
           
            <div>
            <h3 className={style.firma}>ViR Montoya</h3>
        <h5 className={style.firma}>Diseñadora de Indumentaria</h5>
        <h3 className={style.firma}>Futura Full Stack Developer</h3>
            </div>
        
        </div>  
    )
}