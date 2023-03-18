const server = require('../server');
const session = require('supertest');
const { getCharById } = require('../controllers/getCharById');
const agent = session(server);

describe('Test de RUTAS', () => {
    describe('GET rickandmorty/{id}', () => {
        it('Responde con status: 200', () => {
            agent.get('/rickandmorty/1').expect(200);   
        });
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender" e "image"', async() => {
            let prop = ["id", "name", "species", "gender", "image"];
            const data = await getCharById()
            agent.get(Objet.key(data)).toEqual(prop); 
        });
        it('Si hay un error responde con status: 500', () => {
            agent.get('/rickandmorty/IDqueNoExiste').expect(500);
        })
    })
    describe('GET rickandmorty/{detailId}', () => {
        it('Responde con status: 200', () => {
            agent.get('/rickandmorty/1').expect(200);   
        });
        it('Responde un objeto con las propiedades: "id", "image", "name", "gender", "status", "origin" y "species"', async() => {
            let prop = ["id", "image", "name", "gender", "status", "origin", "species"];
            const data = await getCharDetail()
            agent.get(Objet.key(data)).toEqual(prop); 
        });
        it('Si hay un error responde con status: 500', () => {
            agent.get('/rickandmorty/IDqueNoExiste').expect(500);
        });
    })
})