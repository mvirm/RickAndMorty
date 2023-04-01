const express = require('express');
const { router } = require('./routes/index');
const morgan = require('morgan');
const cors = require('cors');
const {conn} =require('./DB_connection')

const server = express();
const PORT = 3001;

server.use(morgan('dev'));
server.use(cors());
// Configuracion con problemas de CORS:
//1 - npm install cors --save
//2 - requiero cors:
//    const cors = require('cors');
//3 - creao una constante con las opciones de cors en un objeto
//    const corsOptions = {
    //         origin: "*",
    //         credentials: true; ==> access-control-allow-credentials: true
    //         optionsSuccessStatus: 200
    //      };
    //4 - ejecuto cors en server.use, pasandole como argumento el objeto de opciones
    //      server.use(cors(corsOptions));
    
    server.use(express.json());
    server.use('/rickandmorty', router);
    conn.sync({force:true}).then(() => {
        server.listen(PORT, () => {
            console.log(`Server raised in port ${PORT}`);
        });
    });
    
    //SERVER CREADO EN HW PROMESAS
    //const http = require("http");
    //const { getCharById } = require('./controllers/getCharById');
    //const { getCharDetail} = require('./controllers/getCharDetail');
    //const characters = require ('./utils/data.js');

/*http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    let id = req.url.split('/').at(-1);

    if(req.url.includes('onsearch')) {
        getCharById(res, id)
    }
    if(req.url.includes('detail')) {
        getCharDetail(res, id)
    }
}).listen(PORT, 'localhost');*/

/*SERVER CREADO EN HW WEB SERVER 
http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if(req.url.includes('rickandmorty/character')) {
        let id = req.url.split('/').at(-1); // separo el array url por / y tomo el ultimo elemento (at es un metodo que recibe un entero y devuelve lo que esta en esa posicion, si el nro es negativo, cuenta de atras a adelante)
        let find = characters.find(char => char.id === Number(id)) // at devuelve un string ==> parseo el string a numero
        res.writeHead(200, { 'Content-type': 'application/json' });
        res.end(JSON.stringify(find));
    } else {
        res.writeHead(404, { 'Content-type': 'text/plain' });
        res.end('Character not found');
    }
}).listen(PORT, 'localhost');*/

// falta conectar el back con el front ej04 
//hay que exportar el server, como se hizo en el ej de web server???