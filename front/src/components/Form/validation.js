const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPass=/(?=(.*[0-9]))(?=.*[a-z])(?=(.*)).{6,10}/;

export default function validation(userData) {
    let errors = {};
    
    if(!userData.username) {errors.username = 'Debe ingresar un usuario';}
    else if(userData.username.length > 35) {errors.username = 'Usuario demasiado largo';}
    else if(!regexEmail.test(userData.username)) {errors.username = 'El usuario debe ser un email valido';}
    
    if(userData.password.length < 6 && userData.password.length > 10){errors.password = 'El password debe contener entre 6 y 10 caracteres';}
    else if(!regexPass.test(userData.password)) {
        errors.password = 'El password debe contener al menos 1 numero';}

    return errors;
}